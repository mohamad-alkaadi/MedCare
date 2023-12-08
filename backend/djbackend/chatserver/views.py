from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ServerSerializer
from rest_framework.response import Response
from .models import Server


# viewsets is a class that provide CRUD operations
class ServerListViewSet(viewsets.ViewSet):
    queryset = Server.objects.all()

    def list(self, request):
        category = request.query_params.get("category")  # capture category id
        if category:  # if exits
            self.queryset = self.queryset.filter(category__name=category)
        serializer = ServerSerializer(self.queryset, many=True)
        return Response(serializer.data)