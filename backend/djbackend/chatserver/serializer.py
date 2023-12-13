from rest_framework import serializers
from .models import Server, Category, Channel

class ChannelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Channel
        fields = "__all__"
class ServerSerializer(serializers.ModelSerializer):
    num_members = serializers.SerializerMethodField() #allows us to generate a field value that is not derived from model attribute like methods(functions)
    channel_server = ChannelSerializer(many =True)
    class Meta:
        model = Server
        exclude = ("member",)

    def get_num_members(self, obj):
        if hasattr(obj, "num_members"): #if it has the attribute num_members return it
            return obj.num_members
        return None
    def to_representation(self, instance):
        data = super().to_representation(instance)
        num_members = self.context.get("num_members")
        if not num_members:
            data.pop("num_members", None)
        return data