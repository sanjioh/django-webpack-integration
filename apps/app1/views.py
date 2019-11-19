from django.views.generic import TemplateView


class HomeView(TemplateView):
    template_name = 'app1/home.html'


class AboutView(TemplateView):
    template_name = 'app1/about.html'
