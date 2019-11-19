"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path

from apps.app1 import views as app1views
from apps.app2 import views as app2views

urlpatterns = [
    path('home/', app1views.HomeView.as_view()),
    path('about/', app1views.AboutView.as_view()),
    path('list/', app2views.ListView.as_view()),
    path('detail/', app2views.DetailView.as_view()),
]
