import { Button, Grid, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { getVoterInfo, IAddress } from "../../store/actions";
import { Store } from "../../store/Store";
import { useForm, Form } from "../utils/useForm";

const initialFValues: IAddress = {
  locationName: "",
  line1: "",
  line2: "",
  line3: "",
  city: "",
  state: "",
  zip: "",
};

const VoterInfo = () => {
  const { state, dispatch } = useContext(Store);
  const { values, onChange } = useForm(initialFValues);

  const { line1, line2, line3, city, state: residentState, zip } = values;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    getVoterInfo(dispatch, state.currentElectionId, values);
  };

  return (
    <Form>
      <Grid container>
        <Grid xs={12} sm={6} item>
          <TextField
            variant="outlined"
            label="Line 1"
            name="line1"
            value={line1}
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            label="Line 2 (Optional)"
            name="line2"
            value={line2}
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            label="Line 3 (Optional)"
            name="line3"
            value={line3}
            onChange={onChange}
          />
        </Grid>
        <Grid xs={12} sm={6} item>
          <TextField
            variant="outlined"
            label="City"
            name="city"
            value={city}
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            label="State"
            name="state"
            value={residentState}
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            label="Zip Code"
            name="zip"
            value={zip}
            onChange={onChange}
          />
        </Grid>
        <Grid xs={12} style={{ marginTop: "1rem" }} item>
          <Button
            onClick={onSubmit}
            fullWidth
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default VoterInfo;
