from django.views.generic import TemplateView


class HomeView(TemplateView):
    template_name = 'ui/home.html'


class AboutView(TemplateView):
    template_name = 'ui/about.html'
