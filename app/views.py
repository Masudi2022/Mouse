# from django.shortcuts import render
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status  
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.http import HttpResponse
import json
from . serializer import StudentSerializer, StandingSerializer, SquadSerializer, CommentSerializer, FanSerializer, NewSerializer,FixtureSerializer,TeamSerializer
from .models import Student, Standing,Squad,Message,Fan, New,Fixture,Team,Comment
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import logout
from django.http import HttpResponseRedirect
from rest_framework import status
from rest_framework.authtoken.models import Token  # For token generation
from django.contrib.auth import logout, login
from django.http import HttpResponseRedirect



# Create your views here.
@api_view(['GET','POST', 'PUT', 'PATCH'])
def home(request):
    if request.method == 'GET':
        courses = {
            'course': 'python',
            'learn': ['flask', 'django']
        }
        print('You hit a Get method')
        return Response(courses)
    elif request.method == 'POST':
        message = {
            'sms': 'This Aim for posting',
        }
        print('You hit a post method')
        return Response(message)
    
@api_view(['GET'])
def standing(request):
    if request.method == 'GET':
        standing = Standing.objects.all()
        serializer = StandingSerializer(standing, many=True)
        return Response(serializer.data)
    
@api_view(['GET'])
def squad(request):
    if request.method == 'GET':
        squad = Squad.objects.all()
        serializer = SquadSerializer(squad, many=True)
        return Response(serializer.data)
 


@api_view(['POST', 'GET'])
@permission_classes([AllowAny])
def register(request):
    if request.method == 'POST':
        serializer = FanSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)  # Successfully created
        print(serializer.errors)  # Debug: Print serializer errors to console
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    
    elif request.method == 'GET':
        fan = Fan.objects.all()
        serializer = FanSerializer(fan, many=True)
        return Response(serializer.data)

  
@api_view(['GET','PUT', 'POST', 'PATCH', 'DELETE'])
def student(request):
    if request.method == 'GET':
        student = Student.objects.all()
        serializer = StudentSerializer(student, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        data = request.data
        serializer = StudentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
    elif request.method == 'PATCH':
        data = request.data
        serializer = StudentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
    elif request.method == 'PUT':
        data = request.data
        serializer = StudentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
    else:
        data = request.data
        student = Student.objects.get(id= data['id'] )
        student.delete()
        return Response({"message":"person deleted"})
    
    



@api_view(['GET', 'POST', 'DELETE'])
def comment(request):
    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            # Associate the comment with the authenticated user
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        comments = Comment.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        data = request.data
        try:
            comment = Comment.objects.get(id=data['id'])
            comment.delete()
            return Response({"message": "Comment deleted"}, status=status.HTTP_204_NO_CONTENT)
        except Comment.DoesNotExist:
            return Response({"error": "Comment not found"}, status=status.HTTP_404_NOT_FOUND)

    
@api_view(['GET'])
def news(request):
    if request.method == 'GET':
        news = New.objects.all()
        serializer = NewSerializer(news, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.error, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def fixture(request):
    if request.method == 'GET':
        fixture = Fixture.objects.all()
        serializer = FixtureSerializer(fixture, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def team(request):
    if request.method == 'GET':
        team = Team.objects.all()
        serializer = TeamSerializer(team, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def biography(request, id):
    try:
        squad = Squad.objects.get(pk=id)
    except Squad.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = SquadSerializer(squad)
    return Response(serializer.data)




from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)
            # Replace with your logic to return user data upon successful login
            return JsonResponse({'message': 'Login successful', 'username': user.username, 'id': user.id})
        else:
            return JsonResponse({'message': 'Invalid credentials'}, status=401)



# views.py


@api_view(['POST'])
def logout(request):
    if request.method == 'POST':
        try:
            # Access the underlying Django HttpRequest object
            django_request = request._request
            logout(django_request)
            return Response({'message': 'Logout successful'})
        except Exception as e:
            return Response({'message': f'Error during logout: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)






        
