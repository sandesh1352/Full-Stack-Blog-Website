from django.shortcuts import render
from django.contrib.auth.models import User

from django.contrib.auth import authenticate, login
from rest_framework.permissions import IsAuthenticated

from rest_framework.response import Response
from  rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

# Create your views here.
class UserRegistration(APIView):

    def post(self,request):
    
        username = request.data["username"]
        password = request.data["password"]
        user = User(username = username)
        user.set_password(password)
        refresh = RefreshToken.for_user(user)
        user.save()

        return Response({
            "status" : True,
            "id" : user.pk,
            "access" : str(refresh.access_token)
        })

class UserLogin(APIView):
    def post(self,request):
        username = request.data["username"]
        password = request.data["password"]
        user = User.objects.get(username = username)
        if user.check_password(password):
            refresh = RefreshToken.for_user(user)
            return Response({ "msg":True, "access" :str(refresh.access_token), "loggedIn":str(user.username), "id": user.pk })
        
        else:
            return Response({"msg": False})
            


class UserLogout(APIView):
    def post(self, request):
        pass



