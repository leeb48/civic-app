import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { Fragment, useContext } from "react";
import { Store } from "../../store/Store";
import ElectionChoices from "./ElectionChoices";
import ElectionResults from "./ElectionResults";
import VoterInfoForm from "./VoterInfoForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headingContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
    },
    pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
    },
  })
);

const Elections = () => {
  const { state } = useContext(Store);
  const classes = useStyles();

  return (
    <Fragment>
      <Paper className={classes.headingContent} variant="outlined">
        <Typography variant="h6" component="h6">
          Choose an upcoming election to get more information in your area.
        </Typography>
      </Paper>

      <ElectionChoices />

      {state.currentElectionId && (
        <Paper className={classes.pageContent}>
          <VoterInfoForm />
        </Paper>
      )}

      <ElectionResults />
    </Fragment>
  );
};

export default Elections;
