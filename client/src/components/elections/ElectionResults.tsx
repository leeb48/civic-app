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
import React, { useContext } from "react";
import { Store } from "../../store/Store";

// Icon Imports
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LanguageIcon from "@material-ui/icons/Language";
import GavelIcon from "@material-ui/icons/Gavel";
import InfoIcon from "@material-ui/icons/Info";

import { IVoterInfo } from "../../store/interfaces";
import { renderCandidateIcon, renderSNS } from "../utils/renderIcons";

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
    accordionContent: {
      marginBottom: theme.spacing(2),
    },
    iconSize: {
      "& .MuiSvgIcon-root": {
        height: "3rem",
        width: "3rem",
      },
    },
    smallIcon: {
      height: "2rem !important",
      width: "2rem !important",
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

const ElectionResults = () => {
  const { state } = useContext(Store);
  const classes = useStyles();

  const renderGeneral = (contest: IVoterInfo["contests"][0]) => (
    // Header for the election
    <Grid key={contest.office} xs={12} sm={11} item>
      <Paper className={classes.searchResults}>
        <Typography color="inherit" variant="h5" gutterBottom>
          {contest.office}
        </Typography>

        {/* Render candidates */}
        {contest.candidates?.map((candidate) => (
          <Accordion key={candidate.name}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div className="icon-and-text">
                {renderCandidateIcon(candidate.party)}
                <Typography variant="h6">
                  {candidate.name} ({candidate.party})
                </Typography>
              </div>
            </AccordionSummary>

            {/* Render Contact Info */}
            <AccordionDetails>
              <Grid container>
                <Grid
                  className={classes.accordionContent}
                  justify="space-around"
                  item
                  container
                >
                  {candidate.phone && (
                    <div className="icon-and-text">
                      <PhoneIcon style={{ fill: "#0F9D58" }} />
                      <Typography variant="body1">{candidate.phone}</Typography>
                    </div>
                  )}
                  {candidate.email && (
                    <div className="icon-and-text">
                      <EmailIcon style={{ fill: "#F4B400" }} />
                      <Typography variant="body1">{candidate.email}</Typography>
                    </div>
                  )}
                  {candidate.candidateUrl && (
                    <div className="icon-and-text">
                      <IconButton
                        component={Link}
                        target="_blank"
                        href={candidate.candidateUrl}
                      >
                        <LanguageIcon style={{ fill: "#4285F4" }} />
                      </IconButton>
                    </div>
                  )}
                </Grid>

                {/* Render SNS Info */}
                <Grid justify="space-around" item container>
                  {candidate.channels?.map((channel) => (
                    <Grid key={channel.id} item>
                      {renderSNS(channel.type, channel.id)}
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </Grid>
  );

  const renderReferendum = (contest: IVoterInfo["contests"][0]) => (
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

  const renderContests =
    state.voterInfo &&
    state.voterInfo.contests.map((contest) => {
      // General elections and referendums are displayed separately
      if (contest.type === "General") {
        return renderGeneral(contest);
      }

      return renderReferendum(contest);
    });

  return (
    <Grid
      justify="center"
      className={`${classes.iconAndText} ${classes.iconSize}`}
      container
    >
      {renderContests}
    </Grid>
  );
};

export default ElectionResults;
