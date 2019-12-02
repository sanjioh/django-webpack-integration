from django.views.generic import TemplateView


class ListView(TemplateView):
    template_name = 'ui/list.html'


class DetailView(TemplateView):
    template_name = 'ui/detail.html'
