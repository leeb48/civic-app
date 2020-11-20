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
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LanguageIcon from "@material-ui/icons/Language";

// Interface Imports
import { IVoterInfo } from "../../../store/interfaces";

// Util Imports
import {
  renderCandidateIcon,
  renderSNSFullLink,
} from "../../utils/renderIcons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchResults: {
      marginBottom: theme.spacing(3),
      padding: theme.spacing(3),
    },
    accordionContent: {
      marginBottom: theme.spacing(2),
    },
  })
);

interface ICandidateItemProps {
  contest: IVoterInfo["contests"][0];
}

const CandidateItem = ({ contest }: ICandidateItemProps) => {
  const classes = useStyles();

  return (
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

            {/* Render contact info */}
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
                      {renderSNSFullLink(channel.type, channel.id)}
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
};

export default CandidateItem;
