from PIL import Image
import os
from django.core.exceptions import ValidationError
def validate_icon_image_size(image):
    if image:
        with Image.open(image) as img:
            if img.width > 70 or img.height > 70:
                raise ValidationError(
                    f"The maximum allowed dimensions for the image are 70x70 - size of the image you uploaded: {image.size}"
                )

# add validation for banner 
#optional make a function that scale the image to it's supported size

def validate_image_file_extension(value):
    ext = os.path.splitext(value.name)[1] #how to know where the split is 
    valid_extensions = [".jpg", ".jpeg", ".png", ".gif"]
    if not ext.lower() in valid_extensions:
        raise ValidationError(
            f"unsupported file extension"
        )