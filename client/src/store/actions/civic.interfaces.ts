import { IElection, IVoterInfo } from "../interfaces";
import { CivicActionTypes } from "./civic.actions";

// Action Interfaces
export interface IGetElectionsAction {
  type: CivicActionTypes.getElections;
  payload: IElection[];
}

export interface IGetVoterInfoAction {
  type: CivicActionTypes.getVoterInfo;
  payload: IVoterInfo;
}

// Data Interfaces
export interface IAddress {
  locationName?: string;
  line1: string;
  line2?: string;
  line3?: string;
  city: string;
  state: string;
  zip: string;
}
