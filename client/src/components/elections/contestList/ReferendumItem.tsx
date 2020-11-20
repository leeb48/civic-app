import React from "react";

// Material UI Imports
import {
  createStyles,
  makeStyles,
  Theme,
  Grid,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  IconButton,
} from "@material-ui/core";

// Icon Imports
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";
import GavelIcon from "@material-ui/icons/Gavel";
import InfoIcon from "@material-ui/icons/Info";

// Interface Imports
import { IVoterInfo } from "../../../store/interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchResults: {
      marginBottom: theme.spacing(3),
      padding: theme.spacing(3),
    },
    smallIcon: {
      height: "2rem !important",
      width: "2rem !important",
    },
  })
);

interface IReferendumItemProps {
  contest: IVoterInfo["contests"][0];
}

const ReferendumItem = ({ contest }: IReferendumItemProps) => {
  const classes = useStyles();

  return (
    <Grid key={contest.referendumSubtitle} xs={12} sm={11} item>
      <Paper className={classes.searchResults}>
        {/* Render referendum title */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div className="icon-and-text">
              <GavelIcon style={{ fill: "#774936" }} />
              <Typography variant="h6">
                {contest.referendumTitle} ({contest.type})
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            {/* Render referendum info and link to url */}
            <Grid container>
              <Grid xs={11} item className="icon-and-text">
                <InfoIcon
                  style={{ fill: "#118ab2" }}
                  className={classes.smallIcon}
                />
                {contest.referendumSubtitle}.
              </Grid>
              <Grid xs={1} item>
                {contest.referendumUrl && (
                  <IconButton
                    component={Link}
                    target="_blank"
                    href={contest.referendumUrl}
                  >
                    <LanguageIcon
                      className={classes.smallIcon}
                      style={{ fill: "#4285F4" }}
                    />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Grid>
  );
};

export default ReferendumItem;
