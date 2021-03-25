from django.contrib.auth import get_user_model
from django.db.models import Model, ImageField, CASCADE, OneToOneField
from PIL import Image

User = get_user_model()


class Profile(Model):
    user = OneToOneField(User, on_delete=CASCADE)
    image = ImageField(default="default.webp", upload_to="profile_pics")

    def __str__(self):
        return f"""{" ".join(self.user.username.split(".")) }'s  Profile"""

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        img = Image.open(self.image.path)
        if img.height > 300 or img.width > 300:
            output_size = (300, 300)
            img.thumbnail(output_size)
            img.save(self.image.path)
