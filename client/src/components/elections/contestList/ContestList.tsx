import React, { useContext } from "react";

// Material UI Imports
import {
  createStyles,
  makeStyles,
  Theme,
  Grid,
  Paper,
} from "@material-ui/core";

// State Management Imports
import { Store } from "../../../store/Store";

// Component Imports
import ReferendumItem from "./ReferendumItem";
import CandidateItem from "./CandidateItem";
import Spinner from "../../layout/Spinner";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconSize: {
      "& .MuiSvgIcon-root": {
        height: "3rem",
        width: "3rem",
      },
    },
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

const ContestList = () => {
  const {
    state: {
      searchLoading,
      voterInfoSearchResults: { contests },
    },
  } = useContext(Store);
  const classes = useStyles();

  const renderContests = contests?.map((contest, idx) => {
    // General elections and referendums are displayed separately
    if (contest.type === "Referendum") {
      return <ReferendumItem key={idx} contest={contest} />;
    }

    return <CandidateItem key={idx} contest={contest} />;
  });

  return (
    <Grid
      justify="center"
      className={`${classes.iconAndText} ${classes.iconSize}`}
      container
    >
      {searchLoading ? <Spinner /> : renderContests}
    </Grid>
  );
};

export default ContestList;
