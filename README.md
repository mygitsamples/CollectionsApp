# CollectionsApp


#Install Packages:
npm install
#Launch Application:
npm run start
#Run Unit Tests:
npm run test

Querying: 
users can query by key or value individually or both.
fetch all the records with out any parameters.
Add/Updating:
Key to values is one->Many Relationship. Values under same key must be unique.
Add key and value pair. Adding a new value to existing key should update existing record.
Delete/all: 
users can delete single key which delete entire item and all its values.
Delete a specific key and value from the record, removes only value. Delete all Records together.
Validations:
Display validation messages in all above scenarios when key/value doesn’t exist.
Confirmation on adding/updating/deleting records with corresponding value.
