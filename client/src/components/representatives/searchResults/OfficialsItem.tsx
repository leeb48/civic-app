import React, { Fragment, useContext } from "react";

// Material UI Imports
import {
  createStyles,
  makeStyles,
  Theme,
  Grid,
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

// Util Imports
import { renderCandidateIcon, renderSNSIdOnly } from "../../utils/renderIcons";
import { Store } from "../../../store/Store";

interface IOfficialsItemProps {
  officialIdx: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accordionContent: {
      marginBottom: theme.spacing(2),
    },
  })
);

const OfficialsItem = ({ officialIdx }: IOfficialsItemProps) => {
  const {
    state: {
      representativeSearchResults: { officials },
    },
  } = useContext(Store);

  const classes = useStyles();

  const renderOfficials = officials && (
    <Accordion key={officials[officialIdx].name}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <div className="icon-and-text">
          {renderCandidateIcon(officials[officialIdx].party)}
          <Typography variant="h6">
            {officials[officialIdx].name} ({officials[officialIdx].party})
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
            {officials[officialIdx].phones && (
              <div className="icon-and-text">
                <PhoneIcon style={{ fill: "#0F9D58" }} />
                <Typography variant="body1">
                  {officials[officialIdx].phones[0]}
                </Typography>
              </div>
            )}
            {officials[officialIdx].emails && (
              <div className="icon-and-text">
                <EmailIcon style={{ fill: "#F4B400" }} />
                <Typography variant="body1">
                  {officials[officialIdx].emails[0]}
                </Typography>
              </div>
            )}
            {officials[officialIdx].urls && (
              <div className="icon-and-text">
                <IconButton
                  component={Link}
                  target="_blank"
                  href={officials[officialIdx].urls[0]}
                >
                  <LanguageIcon style={{ fill: "#4285F4" }} />
                </IconButton>
              </div>
            )}
          </Grid>

          {/* Render SNS Info */}
          <Grid justify="space-around" item container>
            {officials[officialIdx].channels?.map((channel, idx) => (
              <Grid key={idx} item>
                {renderSNSIdOnly(channel.type, channel.id)}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );

  return <Fragment>{renderOfficials}</Fragment>;
};

export default OfficialsItem;
