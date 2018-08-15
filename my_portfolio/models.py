from django.db import models
# Create your models here.



class Project(models.Model):

	title = models.CharField(max_length=100, blank=True)
	title_image = models.ImageField(upload_to='title_images/')
	description = models.TextField(max_length=200, blank=True)
	github_link = models.CharField(max_length=300, blank=True)
	live_link = models.CharField(max_length=300, blank=True)

	def __str__(self):
		return self.title





