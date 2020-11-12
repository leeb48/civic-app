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
import React, { Fragment, useContext } from "react";
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
  return (
    <Fragment>
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
      <Grid justify="center" container>
        <Grid xs={1} item />
        {state.elections?.map((election) => (
          <Grid key={election.ocdDivisionId} item>
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
        ))}
        <Grid xs={1} item />
      </Grid>
    </Fragment>
  );
};

export default ElectionChoices;
