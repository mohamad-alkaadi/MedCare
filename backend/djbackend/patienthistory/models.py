from django.db import models
from django.utils import timezone
# Create your models here.

class Doctor(models.Model):
    name = models.CharField(max_length=255, null=False)
    specialization = models.CharField(max_length=255, null=False)
    date_joined = models.DateTimeField(default=timezone.now)
    still_member = models.BooleanField(default=True)
    def __str__(self):
        return self.name


class Appointment(models.Model):
    APPOINTMENT_CHOICES = [
        ('checkup', 'Checkup'),
        ('follow-up', 'Follow-up'),
        ('surgery', 'Surgery'),
    ]
    reason = models.CharField(max_length=255, null=False)
    doctor = models.ForeignKey(Doctor, on_delete= models.CASCADE)
    description = models.TextField()
    medicine_prescribed= models.TextField()
    date = models.DateTimeField(default=timezone.now)
    need_surgery = models.BooleanField()
    appointment_type = models.CharField(max_length=20, choices=APPOINTMENT_CHOICES)
    # checkup /  follow-up / surgery
    def __str__(self):
        return self.reason
    def save(self, *args, **kwargs):
        if self.appointment_type == 'surgery':
            self.need_surgery = False
        super().save(*args, **kwargs)


# class Surgery(models.Model):
#     surgery = models.CharField(max_length="255")
#     doctor = models.ForeignKey(Doctor, on_delete= models.CASCADE)
#     description = models.TextField()
#     medicine_prescribed= models.TextField()
#     History = models.DateTimeField()
#     appointment_type = models.CharField(default="surgery")


# class DiagnosisHistory(models.Model):
#     illness = models.ForeignKey(Dignosis, on_delete=models.CASCADE)
    # history = models.DateTimeField()
    # medicine_prescribed= models.TextField()



# class Dignosis(models.Model):
#     surgery = models.CharField(max_length="255")
#     doctor = models.ForeignKey(Doctor, on_delete= models.CASCADE)
#     brief_description = models.TextField()
#     History = models.DateTimeField()
#     medicine_prescribed= models.TextField()
