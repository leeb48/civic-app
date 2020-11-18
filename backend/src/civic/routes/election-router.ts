import express, { Request, Response } from "express";
import axios from "axios";

const router = express.Router();

/**
 * @route   GET /api/civic/get-elections
 * @desc    Retrieves the information for upcoming elections
 * @access  Public
 */
router.get("/api/civic/get-elections", async (req: Request, res: Response) => {
  try {
    const axiosRes = await axios.get(
      `https://www.googleapis.com/civicinfo/v2/elections?key=${process.env.API_KEY}`
    );

    return res.send(axiosRes.data.elections);
  } catch (error) {
    throw new Error(error);
  }
});

/**
 * @route   POST /api/civic/get-voter-info
 * @desc    Makes a request to google civic api with an address from the POST
 *          request. Sends back detailed info about the election that is happening
 *          at the address.
 * @access  Public
 */
router.post(
  "/api/civic/get-voter-info",
  async (req: Request, res: Response) => {
    try {
      const { electionId, address } = req.body;

      // construct address
      const line1 = address.line1 ? address.line1 : "";
      const line2 = address.line2 ? address.line2 : "";
      const line3 = address.line3 ? address.line3 : "";
      const city = address.city ? address.city : "";
      const state = address.state ? address.state : "";
      const zip = address.zip ? address.zip : "";

      const axiosRes = await axios.get(
        `https://www.googleapis.com/civicinfo/v2/voterinfo?key=${process.env.API_KEY}&address=${line1}%20${line2}%20${line3}%20${city}%20${state}%20${zip}&electionId=${electionId}`
      );

      res.send(axiosRes.data);
    } catch (error) {}
  }
);

export { router as electionRouter };
