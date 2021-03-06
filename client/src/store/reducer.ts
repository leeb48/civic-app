import { Actions, CivicActionTypes } from "./actions";
import { IState } from "./interfaces";

export const initialState: IState = {
  elections: null,
  currentElectionId: "",
  voterInfo: null,
  voterInfoSearchResults: {
    contests: null,
    earlyVoteSites: null,
    pollingLocations: null,
  },
  representativesInfo: null,
  searchLoading: false,
  representativeSearchResults: {
    offices: null,
    officials: null,
  },
};

export const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case CivicActionTypes.getElections:
      return {
        ...state,
        elections: action.payload,
      };

    case CivicActionTypes.searchLoading:
      return {
        ...state,
        searchLoading: action.payload,
      };

    case CivicActionTypes.clearElectionId:
      return {
        ...state,
        currentElectionId: "",
        voterInfo: null,
      };
    case CivicActionTypes.setElectionId:
      return {
        ...state,
        currentElectionId: action.payload,
        voterInfoSearchResults: {
          contests: null,
          earlyVoteSites: null,
          pollingLocations: null,
        },
      };
    case CivicActionTypes.getVoterInfo:
      return {
        ...state,
        voterInfo: action.payload.data,
        voterInfoSearchResults: {
          contests: action.payload.contests,
          earlyVoteSites: action.payload.earlyVoteSites,
          pollingLocations: action.payload.pollingLocations,
        },
        searchLoading: false,
      };
    case CivicActionTypes.getRepresentatives:
      return {
        ...state,
        representativesInfo: action.payload.data,
        searchLoading: false,
        representativeSearchResults: {
          offices: action.payload.offices,
          officials: action.payload.officials,
        },
      };
    default:
      return state;
  }
};
