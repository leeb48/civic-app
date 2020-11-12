import {
  createStyles,
  makeStyles,
  Theme,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { Store } from "../../store/Store";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchResults: {
      marginBottom: theme.spacing(3),
      padding: theme.spacing(3),
    },
    candidates: {
      padding: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
  })
);

const ElectionResults = () => {
  const { state } = useContext(Store);
  const classes = useStyles();
  return (
    <Grid justify="center" container>
      {state.voterInfo &&
        state.voterInfo.contests.map((contest, idx) => {
          if (contest.type === "General") {
            return (
              <Grid key={idx} xs={12} sm={11} item>
                <Paper className={classes.searchResults}>
                  <Typography variant="h5">{contest.office}</Typography>
                  {contest.candidates?.map((candidate) => (
                    <Paper
                      className={classes.candidates}
                      elevation={3}
                      variant="outlined"
                      key={candidate.name}
                    >
                      <Typography>
                        {candidate.name} ({candidate.party})
                      </Typography>
                    </Paper>
                  ))}
                </Paper>
              </Grid>
            );
          }

          return (
            <Grid key={idx} xs={12} sm={11} item>
              <Paper className={classes.searchResults}>
                <Typography variant="h5">{contest.type}</Typography>
                {contest.referendumSubtitle}
              </Paper>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default ElectionResults;
