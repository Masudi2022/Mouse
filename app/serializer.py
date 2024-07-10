from rest_framework import serializers
from . models import Student, Standing, Team,Squad, Message, Fan, Comment,New,Fixture
from django.contrib.auth import authenticate


class StudentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Student
        fields = '__all__'
        
        
class TeamSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Team
        fields = ('name',)
        
class StandingSerializer(serializers.ModelSerializer):
    team = TeamSerializer()
    
    class Meta:
        model = Standing
        fields = ['id', 'team', 'points', 'draw', 'win', 'loose', 'goals']  
        
        
class SquadSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Squad
        fields = '__all__'
        

class FanSerializer(serializers.ModelSerializer):

    class Meta:
        model = Fan
        fields = ('username', 'email', 'password')
        
class FanLogin(serializers.ModelSerializer):
    id = serializers.IntegerField(write_only=True)
    
    class Meta:
        model = Fan
        fields = ('id','email', 'password')
        
        
class NewSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = New
        fields = '__all__'
        
        
class FixtureSerializer(serializers.ModelSerializer):
    home_team = TeamSerializer()
    away_team = TeamSerializer()
    class Meta:
        model = Fixture
        fields = ('home_team','away_team', 'venue', 'time', 'date')
        
        
class CommentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Comment
        fields = ('id', 'name', 'body')
        
        
    

        
        





        
