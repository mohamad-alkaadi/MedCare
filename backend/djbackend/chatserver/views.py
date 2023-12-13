from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ServerSerializer
from rest_framework.response import Response
from .models import Server
from rest_framework.exceptions import ValidationError, AuthenticationFailed
from django.db.models import Count

# viewsets is a class that provides CRUD operations
class ServerListViewSet(viewsets.ViewSet):
    queryset = Server.objects.all()

    def list(self, request):
        # Capture query parameters
        category = request.query_params.get("category")
        qty = request.query_params.get("qty")
        by_user = request.query_params.get("by_user") == "true"
        by_serverid = request.query_params.get("by_serverid")
        with_num_members = request.query_params.get("with_num_members") == "true"

        # Filter queryset based on category if provided
        if category:
            self.queryset = self.queryset.filter(category__name=category)

        # Check authentication for queries based on user
        if (by_user or by_serverid) and not request.user.is_authenticated:
            raise AuthenticationFailed()

        # Filter queryset by user if 'by_user' is True
        if by_user:
            user_id = request.user.id
            self.queryset = self.queryset.filter(member=user_id)

        # Annotate queryset with the number of members if 'with_num_members' is True
        if with_num_members:
            self.queryset = self.queryset.annotate(num_members=Count("member"))

        # Limit the queryset to a specified quantity if 'qty' is provided
        if qty:
            self.queryset = self.queryset[: int(qty)]

        # Filter queryset by server id if 'by_serverid' is provided
        if by_serverid:
            try:
                self.queryset = self.queryset.filter(id=by_serverid)
                if not self.queryset.exists():
                    raise ValidationError(detail=f"Server with id {by_serverid} not found")
            except ValueError:
                raise ValidationError(detail=f"Server value error")

        # Serialize the queryset using ServerSerializer
        serializer = ServerSerializer(self.queryset, many=True, context={"num_members": with_num_members})

        # Return the serialized data as a response
        return Response(serializer.data)