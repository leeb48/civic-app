import React, { Fragment, useContext } from "react";

// Material UI Imports
import {
  Grid,
  Card,
  Typography,
  CardActionArea,
  CardContent,
  Button,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";

// State Management Imports
import {
  clearElectionId,
  getElections,
  setElectionId,
} from "../../store/actions";
import { Store } from "../../store/Store";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageContent: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
    },
    card: {
      marginBottom: theme.spacing(3),
    },
  })
);

const ElectionChoices = () => {
  const { state, dispatch } = useContext(Store);
  const classes = useStyles();

  const handleGetElections = () => {
    getElections(dispatch);
  };

  const handleSetElectionId = (electionId: string) => {
    clearElectionId(dispatch);
    setElectionId(dispatch, electionId);
  };

  const renderElectionCards = state.elections?.map((election) => (
    <Grid
      className={classes.card}
      xs={12}
      sm={5}
      key={election.ocdDivisionId}
      item
    >
      <Card>
        <CardActionArea onClick={() => handleSetElectionId(election.id)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {election.electionDay}
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              {election.name}
            </Typography>
            <Typography variant="body2" component="p">
              Election ID: {election.id}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  ));

  return (
    <Fragment>
      {/* Render header */}
      <Grid className={classes.pageContent} container justify="center">
        <Grid item>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={handleGetElections}
          >
            Get Upcoming Elections
          </Button>
        </Grid>
      </Grid>

      {/* Render election cards */}
      <Grid justify="space-around" container>
        {renderElectionCards}
      </Grid>
    </Fragment>
  );
};

export default ElectionChoices;
