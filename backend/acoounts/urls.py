from django.contrib import admin
from django.urls import path,include
from . import views

from rest_framework_simplejwt.views import(
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

urlpatterns = [
    path('User_register/', views.UserRegistration.as_view()),
    path('User_login/', views.UserLogin.as_view()),

    path('token/', TokenObtainPairView.as_view(), name= 'token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
   
    
]
