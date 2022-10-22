print('Start #################################################################');
db = db.getSiblingDB('bills_road');
db.createUser(
  {
    user: 'api_user',
    pwd: 'api1234',
    roles: [{ role: 'readWrite', db: 'bills_road' }],
  },
);
db.createCollection('users');
 
print('END #################################################################');