import { Dispatch } from "react";
import { axiosConfig } from "../../config/axios.config";
import {
  IAddress,
  IClearElectionIdAction,
  IGetElectionsAction,
  IGetRepresentativesAction,
  ISearchLoadingAction,
  IGetVoterInfoAction,
  ISetElectionIdAction,
} from "./civic.interfaces";

export enum CivicActionTypes {
  getElections = "civic/get-elections",
  setElectionId = "civic/set-election-id",
  clearElectionId = "civic/clear-election-id",
  getVoterInfo = "civic/get-voter-info",
  searchLoading = "civic/search-loading",
  getRepresentatives = "civic/get-representatives",
}

export type CivicActions =
  | IGetElectionsAction
  | IGetVoterInfoAction
  | IClearElectionIdAction
  | ISetElectionIdAction
  | ISearchLoadingAction
  | IGetRepresentativesAction;

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
    payload: {
      data: res.data,
      contests: res.data["contests"],
      earlyVoteSites: res.data["earlyVoteSites"],
      pollingLocations: res.data["pollingLocations"],
    },
  });
};

export const searchLoading = (dispatch: Dispatch<ISearchLoadingAction>) =>
  dispatch({
    type: CivicActionTypes.searchLoading,
    payload: true,
  });

export const getRepresentatives = async (
  dispatch: Dispatch<IGetRepresentativesAction>,
  filters: string[],
  address: IAddress
) => {
  const res = await axiosConfig.post("/civic/get-representatives", {
    filters,
    address,
  });

  return dispatch({
    type: CivicActionTypes.getRepresentatives,
    payload: {
      data: res.data,
      offices: res.data["offices"],
      officials: res.data["officials"],
    },
  });
};
