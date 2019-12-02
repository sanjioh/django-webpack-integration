from django.contrib.staticfiles.apps import (
    StaticFilesConfig as _StaticFilesConfig,
)


class StaticFilesConfig(_StaticFilesConfig):
    ignore_patterns = _StaticFilesConfig.ignore_patterns + [
        'ui/templates/*',
        'ui/*.map',
    ]
