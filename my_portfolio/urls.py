from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static

from my_portfolio import views

urlpatterns=[
        url(r'^$', views.welcome, name='welcome'),
        url(r'^about/', views.about, name='about'),
        url(r'^projects/', views.projects, name='projects'),

]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)