from dataclasses import fields
from rest_framework import serializers
from places_api.models import Place

class PlaceSerializer(serializers.ModelSerializer):
  class Meta:
    model = Place
    fields = ('id', 'departamento', 'ciudad', 'cod_departamento', 'cod_ciudad', 'descripcion')
