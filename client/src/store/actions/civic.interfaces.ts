import { IElection, IRepresentativeInfo, IVoterInfo } from "../interfaces";
import { CivicActionTypes } from "./civic.actions";

// Action Interfaces
export interface IGetElectionsAction {
  type: CivicActionTypes.getElections;
  payload: IElection[];
}

export interface ISetElectionIdAction {
  type: CivicActionTypes.setElectionId;
  payload: string;
}

export interface IClearElectionIdAction {
  type: CivicActionTypes.clearElectionId;
}

export interface IGetVoterInfoAction {
  type: CivicActionTypes.getVoterInfo;
  payload: {
    data: IVoterInfo | null;
    contests: IVoterInfo["contests"] | null;
    earlyVoteSites: IVoterInfo["earlyVoteSites"] | null;
    pollingLocations: IVoterInfo["pollingLocations"] | null;
  };
}

export interface IGetRepresentativesAction {
  type: CivicActionTypes.getRepresentatives;
  payload: {
    data: IRepresentativeInfo;
    offices: IRepresentativeInfo["offices"];
    officials: IRepresentativeInfo["officials"];
  };
}

export interface ISearchLoadingAction {
  type: CivicActionTypes.searchLoading;
  payload: boolean;
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

export interface IAddressWithFilter {
  locationName?: string;
  line1: string;
  line2?: string;
  line3?: string;
  city: string;
  state: string;
  zip: string;

  federalFilter: boolean;
  stateFilter: boolean;
  countyFilter: boolean;
  localFilter: boolean;
}
