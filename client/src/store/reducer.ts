import { Actions, CivicActionTypes } from "./actions";
import { IState } from "./interfaces";

export const initialState: IState = {
  elections: null,
  currentElectionId: "",
  voterInfo: null,
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
      };
    case CivicActionTypes.getVoterInfo:
      return {
        ...state,
        voterInfo: action.payload,
      };
    case CivicActionTypes.getRepresentatives:
      return {
        ...state,
        representativesInfo: action.payload.data,
        searchLoading: action.payload.loading,
        representativeSearchResults: {
          offices: action.payload.offices,
          officials: action.payload.officials,
        },
      };
    default:
      return state;
  }
};
