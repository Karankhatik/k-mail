import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  const encodedUsername = encodeURIComponent(USERNAME);
  const encodedPassword = encodeURIComponent(PASSWORD);

  const DB_URI = `mongodb://${encodedUsername}:${encodedPassword}@ac-oif0hww-shard-00-00.byk4fdr.mongodb.net:27017,ac-oif0hww-shard-00-01.byk4fdr.mongodb.net:27017,ac-oif0hww-shard-00-02.byk4fdr.mongodb.net:27017/?ssl=true&replicaSet=atlas-ey51ws-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    mongoose.connect(DB_URI, { useNewUrlParser: true });
    mongoose.set('strictQuery', false);
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Error while connecting to the database: ', error.message);
  }
};

export default Connection;
