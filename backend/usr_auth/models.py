from django.dispatch import receiver
from django.urls import reverse
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import EmailMultiAlternatives
from django.conf import settings
import os


@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):

  FRONT_EXTERNAL_PORT = os.environ['FRONT_EXTERNAL_PORT'] if os.environ.get(
    'FRONT_EXTERNAL_PORT') else 3000
  FRONT_SERVICE_HOST = os.environ['FRONT_SERVICE_HOST'] if os.environ.get(
    'FRONT_SERVICE_HOST') else 'localhost'
  front_domain = f'http://{FRONT_SERVICE_HOST}:{FRONT_EXTERNAL_PORT}'
  url_reset = f"{front_domain}/password/reset/{reset_password_token.key}"

  # Se envía el correo con el token
  subject, from_email, to = [
    'Recuperar contraseña - BillsRoad',
    settings.EMAIL_HOST_USER,
    reset_password_token.user.email
  ]
  text_content = f"""Hemos recibido una solicitud de cambio de contraseña
    Ingresa a la siguiente URL para continuar con el proceso: { url_reset }
    """
  html_content = f"""
    <center style="width: 100%;">
      Hemos recibido una solicitud de cambio de contraseña 
    </center>

    <p style="width: 100%; text-align: center;">
      Ingresa a la siguiente URL para continuar con el proceso: <strong>
        <a target="_blank" href="{ url_reset }">Restablecer contraseña</a>
      </strong>
    </p>
    """
  msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
  msg.attach_alternative(html_content, "text/html")
  try:
    msg.send()
  except Exception as e: print(e)
