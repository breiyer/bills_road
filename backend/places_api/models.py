from django.db import models


# Tablas
class Place(models.Model):
  # Llave primaria
  id = models.AutoField(primary_key=True)

  departamento = models.CharField(max_length=50)
  ciudad = models.CharField(max_length=50)
  cod_departamento = models.CharField(max_length=10)
  cod_ciudad = models.CharField(max_length=10)
  descripcion = models.TextField()

