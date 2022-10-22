from django.shortcuts import render
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from django.views.decorators.csrf import csrf_exempt

from places_api.models import Place
from places_api.serializer import PlaceSerializer

# Create your views here.
@csrf_exempt
@permission_classes([IsAuthenticated])
@api_view(['GET', 'OPTIONS'])
def get_places(request):
  headers = {
    "allow": "GET, OPTIONS"
  }

  if request.method == 'GET':
    places = Place.objects.all()
    places_serializer = PlaceSerializer(places, many=True)
    return JsonResponse({ 'response': 'OK', 'data': places_serializer.data }, safe=False, status=200)

  elif request.method == 'OPTIONS':
    return JsonResponse({}, safe=False, status=200)

  else:
    return JsonResponse({}, safe=False, status=405)


@csrf_exempt
@permission_classes([IsAdminUser])
@api_view(['POST', 'OPTIONS'])
def create_place(request):

  if request.method == 'POST':
    places_data = JSONParser().parse(request)
    places_serializer = PlaceSerializer(data=places_data)

    if places_serializer.is_valid():
      places_serializer.save()
      return JsonResponse({ 'response': 'OK', 'message': 'Lugar agregado' }, safe=False, status=201)
    else: return JsonResponse({ 'response': 'ERROR', 'message': 'Error interno' }, safe=False, status=500)

  elif request.method == 'OPTIONS':
    return JsonResponse({}, safe=False, status=200)
  
  else:
    return JsonResponse({}, safe=False, status=405)
