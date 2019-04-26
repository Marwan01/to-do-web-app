import { Stitch, RemoteMongoClient } from "mongodb-stitch-browser-sdk";

 const APP_ID = 'to-do-ztwxx';

 // TODO:
 // 1. Initialize the app client
 const app = Stitch.initializeAppClient(APP_ID);

 // 2. Instatiate a RemoteMongoClient client and create a RemoteMongoDatabase object
 //    for the 'todo' collection.
 const db = app.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas")
 .db('todo');

 // 3. Create a RemoteMongoCollection for the `items` collection.
 let items = db.collection("items");

 export {app, items};