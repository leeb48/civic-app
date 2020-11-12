import { Dispatch } from "react";
import { axiosConfig } from "../../config/axios.config";
import {
  IAddress,
  IClearElectionIdAction,
  IGetElectionsAction,
  IGetVoterInfoAction,
  ISetElectionIdAction,
} from "./civic.interfaces";

export enum CivicActionTypes {
  getElections = "civic/get-elections",
  setElectionId = "civic/set-election-id",
  clearElectionId = "civic/clear-election-id",
  getVoterInfo = "civic/get-voter-info",
}

export type CivicActions =
  | IGetElectionsAction
  | IGetVoterInfoAction
  | IClearElectionIdAction
  | ISetElectionIdAction;

export const getElections = async (dispatch: Dispatch<IGetElectionsAction>) => {
  const res = await axiosConfig.get("/civic/get-elections");

  return dispatch({
    type: CivicActionTypes.getElections,
    payload: res.data,
  });
};

export const clearElectionId = (dispatch: Dispatch<IClearElectionIdAction>) => {
  return dispatch({
    type: CivicActionTypes.clearElectionId,
  });
};

export const setElectionId = (
  dispatch: Dispatch<ISetElectionIdAction | IClearElectionIdAction>,
  electionId: string
) => {
  return dispatch({
    type: CivicActionTypes.setElectionId,
    payload: electionId,
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
