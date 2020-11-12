import express from "express";

// Routes
import { electionRouter } from "./civic/routes/election-routes";

const app = express();
app.set("trust-proxy", true);
app.use(express.json());

app.use(electionRouter);

export { app };
