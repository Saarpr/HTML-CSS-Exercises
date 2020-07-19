
from django.urls import path
from . import views
from users import views as user_views
from django.contrib.auth import views as auth_views
from django.urls import path, include
from .views import TripListView, TripDetailView

urlpatterns = [
    path('', views.myTrips, name='feed'),
    path('trip/<int:pk>/', TripDetailView.as_view(), name='trip-detail'),
    path('trip/<int:pk>/update',  views.updateTrip, name='trip-update'),
    path('trip/<int:pk>/delete',  views.deleteTrip, name='trip-delete'),
    path('new/', views.createNewTrip, name='trip-create'),

]

