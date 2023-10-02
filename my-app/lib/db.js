import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://lentsweletlotlo0:chrismokotedi@cluster0.iskpsdl.mongodb.net/events?retryWrites=true&w=majority&appName=AtlasApp'
  );

  return client;
}
