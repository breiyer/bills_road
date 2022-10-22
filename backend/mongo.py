from pymongo import MongoClient

MONGO_URI = 'mongodb://root:root@localhost:27018/?authSource=admin'

mongo_client = MongoClient(MONGO_URI)
bills_road__db = mongo_client['bills_road']
places_api__collection = bills_road__db['places_api_place']
