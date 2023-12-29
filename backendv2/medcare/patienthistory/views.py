from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Patient
# from .serializer import PatientSerializer
from . import serializer

# Create your views here.
class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = serializer.PatientSerializer
    # def list(self, request):
    #     serializer = PatientSerializer(self.queryset, many= True)
    #     return Response(serializer.data)