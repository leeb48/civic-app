import {
  createStyles,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { Fragment, useContext } from "react";
import { Store } from "../../store/Store";
import RepresentativesForm from "./RepresentativesForm";
import RepresentativesResults from "./RepresentativesResults";

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

const Representatives = () => {
  const {
    state: { representativesInfo },
  } = useContext(Store);
  const classes = useStyles();

  return (
    <Fragment>
      <Paper className={classes.headingContent} variant="outlined">
        <Typography variant="h6" component="h6">
          Provide an address to find out more about currently elected
          representatives.
        </Typography>
      </Paper>

      <Paper className={classes.pageContent}>
        <RepresentativesForm />
      </Paper>

      {representativesInfo && (
        <Paper className={classes.pageContent}>
          <RepresentativesResults
            offices={representativesInfo.offices}
            officials={representativesInfo.officials}
          />
        </Paper>
      )}
    </Fragment>
  );
};

export default Representatives;
