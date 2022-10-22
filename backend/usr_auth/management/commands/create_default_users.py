from lib2to3.pytree import Base
from django.core.management import BaseCommand
from django.contrib.auth.models import User

class Command(BaseCommand):

  def handle(self, *args, **options):
    if not User.objects.filter(username='admin', email='admin@admin.com').exists():
      User.objects.create_user(
        first_name='Diana',
        email='admin@admin.com',
        last_name='Monsalvo Rodriguez',
        username='admin',
        password='admin',
        is_superuser=True,
        is_staff=True
      ).save()

    if not User.objects.filter(username='common', email='common@common.com').exists():
      User.objects.create_user(
        first_name='Carlos',
        email='common@common.com',
        last_name='Figueroa Jimenez',
        username='common',
        password='common'
      ).save()
    
    self.stdout.write('Successfully created users')
