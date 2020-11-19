import React, { useContext } from "react";

// Material UI Imports
import {
  createStyles,
  makeStyles,
  Theme,
  Grid,
  Typography,
} from "@material-ui/core";

// Interface Imports
import { IRepresentativeInfo } from "../../../store/interfaces";

// Component Imports

import OfficeItem from "./OfficeItem";
import Spinner from "../../layout/Spinner";

// State Management Imports
import { Store } from "../../../store/Store";
interface IRepresentativesResultsProps {
  offices: IRepresentativeInfo["offices"];
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

const RepresentativesList = ({ offices }: IRepresentativesResultsProps) => {
  const classes = useStyles();
  const {
    state: { searchLoading },
  } = useContext(Store);

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
      {searchLoading ? <Spinner /> : renderOffices}
    </Grid>
  );
};

export default RepresentativesList;
