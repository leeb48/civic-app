import { Dispatch } from "react";
import { axiosConfig } from "../../config/axios.config";
import {
  IAddress,
  IGetElectionsAction,
  IGetVoterInfoAction,
} from "./civic.interfaces";

export enum CivicActionTypes {
  getElections = "civic/get-elections",
  getVoterInfo = "civic/get-voter-info",
}

export type CivicActions = IGetElectionsAction | IGetVoterInfoAction;

export const getElections = async (dispatch: Dispatch<IGetElectionsAction>) => {
  const res = await axiosConfig.get("/civic/get-elections");

  return dispatch({
    type: CivicActionTypes.getElections,
    payload: res.data,
  });
};

export const getVoterInfo = async (
  dispatch: Dispatch<IGetVoterInfoAction>,
  electionId: string,
  address: IAddress
) => {
  const res = await axiosConfig.post("/civic/get-voter-info", {
    electionId,
    address,
  });

  return dispatch({
    type: CivicActionTypes.getVoterInfo,
    payload: res.data,
  });
};
