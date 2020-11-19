import React from "react";

// Material UI Imports
import {
  createStyles,
  makeStyles,
  Theme,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

// Interface Imports

import OfficialsItem from "./OfficialsItem";
import { IRepresentativeInfo } from "../../../store/interfaces";

interface IOfficeItemProps {
  office: IRepresentativeInfo["offices"][0];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Add spacing around each search results
    searchResults: {
      marginBottom: theme.spacing(3),
      padding: theme.spacing(3),
    },
  })
);

const OfficeItem = ({ office }: IOfficeItemProps) => {
  const classes = useStyles();

  return (
    <Grid key={office.name} xs={12} sm={11} item>
      <Paper className={classes.searchResults}>
        {/* Header showing office name */}
        <Typography color="inherit" variant="h5" gutterBottom>
          {office.name}
        </Typography>

        {/* The component only needs index to display officials.
            The officials array is stored in the global state. */}
        {office.officialIndices.map((idx) => (
          <OfficialsItem key={idx} officialIdx={idx} />
        ))}
      </Paper>
    </Grid>
  );
};

export default OfficeItem;
