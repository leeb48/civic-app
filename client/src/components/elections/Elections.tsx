import React, { useContext, useEffect } from "react";
import { getElections } from "../../store/actions";
import { Store } from "../../store/Store";
import VoterInfo from "./VoterInfo";

const Elections = () => {
  const { state, dispatch } = useContext(Store);
  const onClick = () => {
    getElections(dispatch);
  };

  return (
    <div>
      <button onClick={onClick}>Get Elections</button>

      <VoterInfo />
    </div>
  );
};

export default Elections;
