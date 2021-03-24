from rest_framework import serializers
from .models import BlogPost

class Blogserializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'
