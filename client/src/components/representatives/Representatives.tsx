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

  const renderHeader = (
    <Paper className={classes.headingContent} variant="outlined">
      <Typography variant="h6" component="h6">
        Provide an address to find out more about currently elected
        representatives.
      </Typography>
      <Typography variant="subtitle2">
        At least one filter must be selected
      </Typography>
    </Paper>
  );

  return (
    <Fragment>
      {renderHeader}

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
