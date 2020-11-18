import React from "react";

// Material UI Imports
import {
  createStyles,
  makeStyles,
  Theme,
  Grid,
  Typography,
} from "@material-ui/core";

// Interface Imports
import { IRepresentativeInfo } from "../../store/interfaces";

import OfficeItem from "./OfficeItem";

interface IRepresentativesResultsProps {
  offices: IRepresentativeInfo["offices"];
  officials: IRepresentativeInfo["officials"];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // The most general icon size
    iconSize: {
      "& .MuiSvgIcon-root": {
        height: "3rem",
        width: "3rem",
      },
    },

    // Align icons and text vertically center
    iconAndText: {
      "& .icon-and-text": {
        display: "flex",
        alignItems: "center",
      },

      "& .MuiSvgIcon-root": {
        marginRight: theme.spacing(1),
      },
    },
  })
);

const RepresentativesResults = ({ offices }: IRepresentativesResultsProps) => {
  const classes = useStyles();

  const renderOffices = offices ? (
    offices.map((office, idx) => <OfficeItem key={idx} office={office} />)
  ) : (
    <Typography variant="h5">No Results</Typography>
  );

  return (
    <Grid
      justify="center"
      className={`${classes.iconAndText} ${classes.iconSize}`}
      container
    >
      {renderOffices}
    </Grid>
  );
};

export default RepresentativesResults;
