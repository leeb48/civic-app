import { Button, Grid, TextField, Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import React, { Fragment as form, useContext, useState } from "react";
import { getVoterInfo, IAddress } from "../../store/actions";
import { Store } from "../../store/Store";
import { useForm } from "../utils/useForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiFormControl-root": {
        width: "80%",
        margin: theme.spacing(1),
      },
    },
  })
);

const initialFValues: IAddress = {};

const VoterInfo = () => {
  const { state, dispatch } = useContext(Store);
  const classes = useStyles();
  useForm();

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
    <form className={classes.root}>
      <Grid container>
        <Grid xs={6} item>
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
        <Grid xs={6} item></Grid>
      </Grid>
    </form>
  );
};

export default VoterInfo;
