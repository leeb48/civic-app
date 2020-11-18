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
import React from "react";
import { IRepresentativeInfo } from "../../store/interfaces";
import {
  renderCandidateIcon,
  renderSNSForRepresentatives,
} from "../utils/renderIcons";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LanguageIcon from "@material-ui/icons/Language";

interface IRepresentativesResultsProps {
  offices: IRepresentativeInfo["offices"];
  officials: IRepresentativeInfo["officials"];
}

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

const RepresentativesResults = ({
  offices,
  officials,
}: IRepresentativesResultsProps) => {
  const classes = useStyles();

  return (
    <Grid
      justify="center"
      className={`${classes.iconAndText} ${classes.iconSize}`}
      container
    >
      {offices ? (
        offices.map((office) => (
          <Grid key={office.name} xs={12} sm={11} item>
            <Paper className={classes.searchResults}>
              {/* Header showing office name */}
              <Typography color="inherit" variant="h5" gutterBottom>
                {office.name}
              </Typography>

              {office.officialIndices.map((idx) => (
                <Accordion key={officials[idx].name}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <div className="icon-and-text">
                      {renderCandidateIcon(officials[idx].party)}
                      <Typography variant="h6">
                        {officials[idx].name} ({officials[idx].party})
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
                        {officials[idx].phones && (
                          <div className="icon-and-text">
                            <PhoneIcon style={{ fill: "#0F9D58" }} />
                            <Typography variant="body1">
                              {officials[idx].phones[0]}
                            </Typography>
                          </div>
                        )}
                        {officials[idx].emails && (
                          <div className="icon-and-text">
                            <EmailIcon style={{ fill: "#F4B400" }} />
                            <Typography variant="body1">
                              {officials[idx].emails[0]}
                            </Typography>
                          </div>
                        )}
                        {officials[idx].urls && (
                          <div className="icon-and-text">
                            <IconButton
                              component={Link}
                              target="_blank"
                              href={officials[idx].urls[0]}
                            >
                              <LanguageIcon style={{ fill: "#4285F4" }} />
                            </IconButton>
                          </div>
                        )}
                      </Grid>

                      {/* Render SNS Info */}
                      <Grid justify="space-around" item container>
                        {officials[idx].channels?.map((channel, idx) => (
                          <Grid key={idx} item>
                            {renderSNSForRepresentatives(
                              channel.type,
                              channel.id
                            )}
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Paper>
          </Grid>
        ))
      ) : (
        <Typography variant="h5">No Results</Typography>
      )}
    </Grid>
  );
};

export default RepresentativesResults;
