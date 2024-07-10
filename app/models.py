from django.db import models

# Create your models here.

class Student(models.Model):
    username = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    password = models.IntegerField()
    
    def __str__(self):
        return self.username
    
    

class Squad(models.Model):
    firstname = models.CharField(max_length=200)
    lastname = models.CharField(max_length=200)
    nationality = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    strength = models.IntegerField()
    age = models.IntegerField()
    salary = models.DecimalField(decimal_places=2, max_digits=10)
    value = models.DecimalField(decimal_places=2, max_digits=10)
    dribbling = models.IntegerField( null=True)
    skills = models.IntegerField(null=True)
    shoot = models.IntegerField(null=True)
    attacking = models.IntegerField(null=True)
    defending = models.IntegerField(null=True)
    
    def __str__(self):
        return self.firstname
    
    
class Team(models.Model):
    name = models.CharField(max_length=200)
    manager=models.CharField(max_length=200)
    
    class Meta:
        ordering = ['-name']
    
    def __str__(self):
        return f"{self.name}"
    
class Fixture(models.Model):
    home_team = models.ForeignKey(Team, related_name="home_fixture", on_delete=models.CASCADE)
    away_team = models.ForeignKey(Team, related_name="away_fixture", on_delete=models.CASCADE, null=True)
    date = models.DateField()
    time = models.TimeField() 
    venue = models.CharField(max_length=100)
    
    def __str__(self):
        return f"{self.home_team.name} VS {self.away_team.name} - {self.date}"
    
class Results(models.Model):
    fixture = models.OneToOneField(Fixture, on_delete=models.CASCADE)
    home_team_score = models.IntegerField()
    away_team_score = models.IntegerField()
    
    def __str__(self):
        return f"{self.home_team_score} : {self.away_team_score} "
    
    
class Standing(models.Model):
    team = models.OneToOneField(Team, on_delete=models.CASCADE)
    points = models.IntegerField()
    draw = models.IntegerField()
    win = models.IntegerField()
    loose = models.IntegerField()
    goals = models.IntegerField()
    
    class Meta:
        ordering = ['-points', 'goals']
        
        
    def __str__(self):
        return f"{self.team}"
    
class New(models.Model):
    title = models.CharField(max_length=200, null=True)
    body = models.TextField()
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['updated', 'created']
        
    def __str__(self):
        return self.body[0:10]
    
    
class Mood(models.Model):
    name = models.CharField(max_length=200)
    
    
    def __str__(self):
        return self.name
    
class Fan(models.Model):
    username = models.CharField(max_length=50)
    since = models.TimeField(auto_now_add=True)
    email = models.EmailField()
    password = models.CharField(max_length=20)
    
    def __str__(self):
        return self.username
    
class Message(models.Model):
    fan = models.ForeignKey(Fan, on_delete=models.CASCADE)
    body = models.TextField()
    
    def __str__(self):
        return self.fan.username
    # created = models.DateTimeField(auto_now_add=True)
    # updated = models.DateTimeField(auto_now=True)
    
    
class Comment(models.Model):
    name= models.CharField(max_length=20)
    body = models.TextField()
    
    def __str__(self):
        return self.body
        

    
    
 