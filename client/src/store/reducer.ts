import { Actions, CivicActionTypes } from "./actions";
import { IState } from "./interfaces";

export const initialState: IState = {
  elections: null,
  currentElectionId: "",
  voterInfo: null,
};

export const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case CivicActionTypes.getElections:
      return {
        ...state,
        elections: action.payload,
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
    default:
      return state;
  }
};
