from pathlib import Path
from dotenv import load_dotenv, find_dotenv
from os import getenv

BASE_DIR = Path(__file__).resolve().parent.parent
DEBUG = getenv("DEBUG")
load_dotenv(find_dotenv())
SECRET_KEY = getenv("SECRET_KEY")
ALLOWED_HOSTS = []
# =================================================================================
# ADMINISTRATIVE
# =================================================================================
EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = "smtp.gmail.com"
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = getenv("EMAIL_USER")
EMAIL_HOST_PASSWORD = getenv("EMAIL_PASS")
# =================================================================================
# APPLICATION
# =================================================================================
# Application definition
THIRD_PARTY_APPS = (
    "djoser",
    "channels",
    "whitenoise",
    "corsheaders",
    "rest_framework",
    "rest_framework.authtoken",
    "django_extensions",
    "crispy_forms",
)
DEVELOPMENT_APPS = ("whitenoise.runserver_nostatic",)
PROJECT_APPS = (
    "chat.apps.ChatConfig",
    "users.apps.UsersConfig",
    "blog.apps.BlogConfig",
)
DJANGO_APPS = (
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
)
INSTALLED_APPS = THIRD_PARTY_APPS + PROJECT_APPS + DJANGO_APPS
if DEBUG:
    INSTALLED_APPS + DEVELOPMENT_APPS
# WSGI_APPLICATION = 'laughing_parakeet.wsgi.application'
ASGI_APPLICATION = "laughing_parakeet.asgi.application"
ROOT_URLCONF = "laughing_parakeet.urls"
# =================================================================================
# CHANNELS / CHAT / WEBSOCKETS
# =================================================================================
CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels_redis.core.RedisChannelLayer",
        "CONFIG": {
            "hosts": [("127.0.0.1", 6379)],
            # ["unix:///path/to/redis.sock"] # unix domain socket faster than loopback
            #  "symmetric_encryption_keys": [SECRET_KEY],
        },
    },
}
# =================================================================================
# DATABASE / CACHE
# =================================================================================
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
        "TEST": {
            "NAME": BASE_DIR / "db_test.sqlite3",
        },
    }
}
# =================================================================================
# INTERNATIONALIZATION
# =================================================================================
LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_L10N = True
USE_TZ = True
# =================================================================================
# REST_FRAMEWORK / API
# =================================================================================
REST_FRAMEWORK = {
    "DEFAULT_PERMISSION_CLASSES": (
        "rest_framework.permissions.IsAuthenticatedOrReadOnly",
    ),
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework.authentication.TokenAuthentication",
        "rest_framework.authentication.SessionAuthentication",
        "rest_framework.authentication.BasicAuthentication",
    ),
}
# CORS_ORIGIN_WHITELIST = ('http://localhost')
# ACCOUNT_AUTHENTICATION_METHOD = "username"
# ACCOUNT_EMAIL_VERIFICATION = "none"
CSRF_COOKIE_NAME = "csrftoken"
# HOST_URL = 'http://127.0.0.1:8000' if DEBUG else 'https://justdjango-chat.herokuapp.com'
# =================================================================================
# SECURITY
# =================================================================================
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators
MIDDLEWARE = (
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
)
AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]
# =================================================================================
# TEMPLATES / STATIC FILES / MEDIA FILES
# =================================================================================
TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]
SITE_ID = 1
STATIC_URL = "/static/"
STATICFILES_DIRS = [BASE_DIR / "build.static"]
STATIC_ROOT = BASE_DIR / "staticfiles"
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"
MEDIA_ROOT = BASE_DIR / "media"
MEDIA_URL = "/media/"
CRISPY_TEMPLATE_PACK = "bootstrap4"
LOGIN_REDIRECT_URL = "blog-home"
LOGIN_URL = "login"
CRISPY_TEMPLATE_PACK = "bootstrap4"
