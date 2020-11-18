import express, { Request, Response } from "express";
import axios from "axios";

const router = express.Router();

router.post(
  "/api/civic/get-representatives",
  async (req: Request, res: Response) => {
    try {
      const { filters, address } = req.body;

      // construct address
      const line1 = address.line1 ? address.line1 : "";
      const line2 = address.line2 ? address.line2 : "";
      const line3 = address.line3 ? address.line3 : "";
      const city = address.city ? address.city : "";
      const state = address.state ? address.state : "";
      const zip = address.zip ? address.zip : "";

      /**
       * * Filter Options
       * federal = country
       * state = administrativeArea1
       * county = administrativeArea2
       * local = locality
       */

      //  combine
      const levels = filters.map((filter: string) => `&levels=${filter}`);

      const axiosRes = await axios.get(
        `https://www.googleapis.com/civicinfo/v2/representatives?key=${
          process.env.API_KEY
        }&address=${line1}%20${line2}%20${line3}%20${city}%20${state}%20${zip}${levels.join(
          ""
        )}`
      );

      res.send(axiosRes.data);
    } catch (error) {
      console.log(error);
    }
  }
);

export { router as representativesRouter };
