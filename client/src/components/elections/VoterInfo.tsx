import { Button, TextField } from "@material-ui/core";
import React, { Fragment, useContext, useState } from "react";
import { getVoterInfo, IAddress } from "../../store/actions";
import { Store } from "../../store/Store";

const VoterInfo = () => {
  const { state, dispatch } = useContext(Store);

  const [address, setAddress] = useState<IAddress>({
    locationName: "",
    line1: "",
    line2: "",
    line3: "",
    city: "",
    state: "",
    zip: "",
  });

  const { line1, line2, line3, city, state: residentState, zip } = address;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAddress({ ...address, [e.currentTarget.name]: e.currentTarget.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    getVoterInfo(dispatch, "2000", address);
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <TextField
          label="Line 1"
          name="line1"
          value={line1}
          onChange={onChange}
        />
        <TextField
          label="Line 2"
          name="line2"
          value={line2}
          onChange={onChange}
        />

        <TextField label="City" name="city" value={city} onChange={onChange} />

        <TextField
          label="state"
          name="state"
          value={residentState}
          onChange={onChange}
        />
        <TextField label="zip" name="zip" value={zip} onChange={onChange} />
        <Button type="submit">Search</Button>
      </form>
    </Fragment>
  );
};

export default VoterInfo;
