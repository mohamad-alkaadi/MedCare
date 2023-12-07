from chatserver.views import ServerListViewSet
from django.contrib import admin
from django.urls import path
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularRedocView,
    SpectacularSwaggerView,
)
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("api/server/select/", ServerListViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/docs/schema/", SpectacularAPIView.as_view(), name="schema"),
    # Optional UI:
    path(
        "api/docs/schema/swagger/ui/",
        SpectacularSwaggerView.as_view(),
        name="swagger-ui",
    ),
] + router.urls
