import express from "express";

// Routes
import { electionRouter } from "./civic/routes/election-router";
import { representativesRouter } from "./civic/routes/representative-router";

const app = express();
app.set("trust-proxy", true);
app.use(express.json());

app.use(electionRouter);
app.use(representativesRouter);

export { app };
