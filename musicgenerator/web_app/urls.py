from django.conf.urls import include, url
from . import views
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^/newsong/', views.new_song)
    # url(r'^/api/newgenre/(?P<some_data>[\w-]+)/$', views.python_query, name='python_query')
]
