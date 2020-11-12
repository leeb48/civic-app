import { app } from "./app";
import mongoose from "mongoose";

const start = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("Mongo URI not present");
    }
    if (
      !process.env.OAUTH_CLIENT_ID &&
      !process.env.OAUTH_CLIENT_SECRET &&
      !process.env.API_KEY
    ) {
      throw new Error("Missing environment variables");
    }

    const mongoURI = process.env.MONGO_URI;

    await mongoose.connect(
      mongoURI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      },
      (error) => {
        if (error) {
          console.log("MongoDB could not be connected");
        }
      }
    );

    console.log("Connected to MongoDB");
  } catch (error) {
    throw new Error(error);
  }

  app.listen(8000, () => {
    console.log("Listening on port 8000");
  });
};

start();
