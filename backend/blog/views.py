from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import APIView,api_view,permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import BlogPost
from .serializers import Blogserializer


# Create your views here.

class AllBlog(APIView):
    def get(self, request):
        queryset = BlogPost.objects.all()
        serializer_object = Blogserializer(queryset, many=True)

        return Response(serializer_object.data)


class BlogPostView(APIView):
    def get(self,request,id):
        user_objects = BlogPost.objects.filter(author=id)
        serializer_object = Blogserializer(user_objects, many=True)
        return Response(serializer_object.data)




class BlogPostCrud(APIView):
    permission_classes = [IsAuthenticated]

    def get(self,request):
        query_set = BlogPost.objects.all()
        serializer_object = Blogserializer(query_set, many=True)

        return Response(serializer_object.data)

    def post(self,request):
        new_blog =  request.data
        serializer_object = Blogserializer(data = new_blog)
        
        if serializer_object.is_valid():
            serializer_object.save()
            return Response({"message":"post successfully"})
        else:
            return Response(serializer_object.errors)

    def put(self,request):
        updated_blog = BlogPost.objects.get(id=request.data["id"])
        serializer_object = Blogserializer(updated_blog,request.data)

        if serializer_object.is_valid():
            serializer_object.save()
            return Response({"mesage":"data updated successfully"})
        else:
            return Response(serializer_object.errors)


def BlogAuthor(request,id):
        author_blog_object = BlogPost.objects.filter(author=id)
        serializer_object = Blogserializer(author_blog_object, many=True)
        return Response(serializer_object.data)

@api_view(['DELETE'])
def deleteBlogPost(request):
    id = request.data["id"]

    updated_blog = BlogPost.objects.get(id = id)

    updated_blog.delete()
    return Response({"msg":"deleted successfully"})





    


