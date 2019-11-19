from django.views.generic import TemplateView


class ListView(TemplateView):
    template_name = 'app2/list.html'


class DetailView(TemplateView):
    template_name = 'app2/detail.html'
