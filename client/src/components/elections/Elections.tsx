import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { Fragment, useContext } from "react";
import { getElections } from "../../store/actions";
import { Store } from "../../store/Store";
import VoterInfo from "./VoterInfo";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
    },
  })
);

const Elections = () => {
  const { state, dispatch } = useContext(Store);
  const classes = useStyles();
  const onClick = () => {
    getElections(dispatch);
  };

  return (
    <Fragment>
      <Typography variant="h4" component="h4">
        Please choose an upcoming election to get more information
      </Typography>
      <Grid container justify="center">
        <Grid item>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={onClick}
          >
            Get Upcoming Elections
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={1} item />
        {state.elections?.map((election) => (
          <Grid key={election.ocdDivisionId} item>
            <Card>
              <CardActionArea>
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

      <Paper className={classes.pageContent}>
        <VoterInfo />
      </Paper>
    </Fragment>
  );
};

export default Elections;
