from django.views.generic import TemplateView


class HomeView(TemplateView):
    template_name = 'app/home.html'


class AboutView(TemplateView):
    template_name = 'app/about.html'
