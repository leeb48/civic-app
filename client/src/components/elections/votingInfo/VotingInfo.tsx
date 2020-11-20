import { Grid, Paper, Theme, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import React, { useContext } from "react";
import { Store } from "../../../store/Store";
import VotingInfoItem from "./VotingInfoItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentPaper: {
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
    },
  })
);

const VotingInfo = () => {
  const {
    state: {
      voterInfoSearchResults: { earlyVoteSites, pollingLocations },
    },
  } = useContext(Store);

  const classes = useStyles();

  const renderEarlyVoteSites = earlyVoteSites ? (
    earlyVoteSites.map((site) => (
      <VotingInfoItem key={site.latitude} location={site} />
    ))
  ) : (
    <Typography variant="h6">
      No data availabe, please check back later
    </Typography>
  );

  const renderOnDayPolling = pollingLocations ? (
    pollingLocations.map((site) => (
      <VotingInfoItem key={site.longitude} location={site} />
    ))
  ) : (
    <Typography variant="h6">
      No data availabe, please check back later
    </Typography>
  );

  return (
    <Grid justify="center" container>
      <Grid item xs={12} sm={11}>
        <Paper className={classes.contentPaper}>
          <Typography color="inherit" variant="h5" gutterBottom>
            Early Vote Locations
          </Typography>

          <Grid justify="space-around" container>
            {renderEarlyVoteSites}
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={11}>
        <Paper className={classes.contentPaper}>
          <Typography color="inherit" variant="h5" gutterBottom>
            On Day Polling Locations
          </Typography>

          <Grid justify="space-around" container>
            {renderOnDayPolling}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default VotingInfo;
