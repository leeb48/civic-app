import React, { Fragment, useContext } from "react";

// Material UI Imports
import {
  createStyles,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";

// State Management Imports
import { Store } from "../../store/Store";

// Component Imports
import ElectionChoices from "./ElectionChoices";
import VoterInfoForm from "./form/VoterInfoForm";
import ContestList from "./contestList/ContestList";
import VotingInfo from "./votingInfo/VotingInfo";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headingContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
    },
    pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
      [theme.breakpoints.down("xs")]: {
        marginLeft: "0",
        marginRight: "0",
      },
    },
  })
);

const ElectionInfo = () => {
  const {
    state: {
      currentElectionId,
      voterInfoSearchResults: { earlyVoteSites, pollingLocations, contests },
    },
  } = useContext(Store);
  const classes = useStyles();

  const renderHeader = (
    <Paper className={classes.headingContent} variant="outlined">
      <Typography variant="h6" component="h6">
        Choose an upcoming election to get more information in your area.{" "}
      </Typography>
      <Typography variant="subtitle2">
        VIP Test Election is a place holder. An actual election will be
        available as we get closer to the election date.
      </Typography>
    </Paper>
  );

  return (
    <Fragment>
      {renderHeader}
      <ElectionChoices />
      {currentElectionId && (
        <Paper className={classes.pageContent}>
          <VoterInfoForm />
        </Paper>
      )}

      {!earlyVoteSites && !pollingLocations && !contests && currentElectionId && (
        <Paper className={classes.pageContent}>
          <Typography align="center" variant="h6">
            Contest data not available
          </Typography>
        </Paper>
      )}

      {(earlyVoteSites || pollingLocations || contests) && <VotingInfo />}

      <ContestList />
    </Fragment>
  );
};

export default ElectionInfo;
