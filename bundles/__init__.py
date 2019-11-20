import json
import os

from django.template import Origin, TemplateDoesNotExist
from django.template.loaders.base import Loader
from django.utils.html import format_html_join


class BundleAssetMap:
    def __init__(self, asset_data):
        self._asset_data = asset_data

    @classmethod
    def from_file(cls, path):
        with open(path, 'r') as f:
            return cls(json.loads(f.read())['entrypoints'])

    def get_js(self, entry):
        return self._get_assets(entry, 'js')

    def _get_assets(self, entry, ext):
        return [
            filename
            for filename in self._asset_data[entry]['assets']
            if filename.endswith('.{}'.format(ext))
        ]

    def get_css(self, entry):
        return self._get_assets(entry, 'css')


class BundleTemplateBuilder:
    def __init__(self, asset_map):
        self._asset_map = asset_map

    def get_js_template(self, entry, *, basepath=''):
        script_tags = self._format_script_tags(entry, basepath)
        return self._format_template(script_tags)

    def _format_script_tags(self, entry, basepath):
        return format_html_join(
            '',
            '<script src="{{{{ STATIC_PREFIX }}}}{}{}"></script>',
            (
                (basepath, filename)
                for filename in self._asset_map.get_js(entry)
            ),
        )

    @staticmethod
    def _format_template(tags):
        return '{}{}'.format(
            '{% load static %}{% get_static_prefix as STATIC_PREFIX %}', tags,
        )

    def get_css_template(self, entry, *, basepath=''):
        style_tags = self._format_style_tags(entry, basepath)
        return self._format_template(style_tags)

    def _format_style_tags(self, entry, basepath):
        return format_html_join(
            '',
            '<link href="{{{{ STATIC_PREFIX }}}}{}{}" rel="stylesheet">',
            (
                (basepath, filename)
                for filename in self._asset_map.get_css(entry)
            ),
        )


class BundleTemplateLoader(Loader):
    asset_map_file = os.path.join('.', 'frontend', 'assets.json')
    asset_basepath = 'frontend/'
    asset_map_class = BundleAssetMap
    template_builder_class = BundleTemplateBuilder

    def __init__(self, engine, options=None):
        options = options or {}
        self._asset_map_file = options.get(
            'asset_map_file', self.asset_map_file,
        )
        self._basepath = options.get('basepath', self.asset_basepath)
        super().__init__(engine)

    def get_template_sources(self, template_name):
        yield Origin(
            name=template_name, template_name=template_name, loader=self,
        )

    def get_contents(self, origin):
        try:
            return self._get_contents(origin)
        except Exception as e:
            raise TemplateDoesNotExist(origin) from e

    def _get_contents(self, origin):
        entry, asset_type = origin.name.rsplit('/', 1)
        builder = self._get_template_builder()
        return {
            'js': builder.get_js_template,
            'css': builder.get_css_template,
        }[asset_type](entry, basepath=self._basepath)

    def _get_template_builder(self):
        asset_map = self.asset_map_class.from_file(self._asset_map_file)
        return self.template_builder_class(asset_map)
