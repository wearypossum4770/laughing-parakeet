from django.contrib.auth import get_user_model
from django.db.models import (
    Model,
    CharField,
    TextField,
    ForeignKey,
    DateTimeField,
    CASCADE,
)

User = get_user_model()


class Post(Model):
    title = CharField(max_length=100)
    content = TextField()
    date_posted = DateTimeField(auto_now_add=True)
    date_modified = DateTimeField(auto_now=True)
    author = ForeignKey(User, on_delete=CASCADE)

    def __str__(self):
        return self.title
