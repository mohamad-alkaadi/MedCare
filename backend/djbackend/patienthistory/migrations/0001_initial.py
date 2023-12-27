# Generated by Django 4.2.7 on 2023-12-27 15:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Doctor",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("specialization", models.CharField(max_length=255)),
                ("date_joined", models.DateTimeField(auto_now_add=True)),
                ("still_member", models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name="Appointment",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("reason", models.CharField(max_length=255)),
                ("description", models.TextField()),
                ("medicine_prescribed", models.TextField()),
                ("date", models.DateTimeField(auto_now_add=True)),
                ("need_surgery", models.BooleanField()),
                (
                    "appointment_type",
                    models.CharField(
                        choices=[
                            ("checkup", "Checkup"),
                            ("follow-up", "Follow-up"),
                            ("surgery", "Surgery"),
                        ],
                        max_length=20,
                    ),
                ),
                (
                    "doctor",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="patienthistory.doctor",
                    ),
                ),
            ],
        ),
    ]
