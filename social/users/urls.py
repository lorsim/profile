from django.urls import path
from .views import register, login, AuthenticatedUser, logout, ProfileInfoAPIView, FileUploadView

urlpatterns = [
    path('register', register),
    path('login', login),
    path('logout', logout),
    path('user', AuthenticatedUser.as_view()),
    path('users/info', ProfileInfoAPIView.as_view()),
    path('upload', FileUploadView.as_view()),
]