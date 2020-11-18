import { app } from "./app";

const start = async () => {
  try {
    if (!process.env.API_KEY) {
      throw new Error("Missing environment variables");
    }
  } catch (error) {
    throw new Error(error);
  }

  app.listen(8000, () => {
    console.log("Listening on port 8000");
  });
};

start();
