from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('BlogPost/',views.BlogPostCrud.as_view()),
    path('BlogPostAuthor/<int:id>',views.BlogPostView.as_view()),
    path('BlogPostCrud/',views.BlogPostCrud.as_view()),
    path('deleteBlogPost/',views.deleteBlogPost),
    path('BlogView/', views.AllBlog.as_view()),
    
    
]