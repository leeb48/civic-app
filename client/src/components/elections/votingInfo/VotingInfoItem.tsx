import {
  Card,
  CardContent,
  Grid,
  Link,
  Theme,
  Typography,
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import React, { Fragment } from "react";
import { IVoterInfo } from "../../../store/interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  })
);

interface IVogintInfoItemProps {
  location: IVoterInfo["earlyVoteSites"][0] | IVoterInfo["pollingLocations"][0];
}

const VotingInfoItem = ({ location }: IVogintInfoItemProps) => {
  const combineAddress = (strings: string[]) => {
    return strings.join(" ");
  };

  const classes = useStyles();

  const renderPollingHours = (hours: string) => {
    const days = hours.split("\n");

    const res = days.map((day) => (
      <Fragment key={day}>
        {day}
        <br />
      </Fragment>
    ));

    return res;
  };

  return (
    <Grid item xs={12} sm={5} className={classes.root}>
      <Card>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {location.startDate} &#x2192; {location.endDate}
          </Typography>
          <Typography variant="h6" component="h2">
            <Link
              href={`https://www.google.com/search?q=${combineAddress([
                location.address.line1,
                location.address.line2,
                location.address.line3,
                location.address.city,
                location.address.state,
                location.address.zip,
              ])}`}
              target="_blank"
            >
              {location.address.locationName
                ? location.address.locationName
                : "Early Vote Location"}
            </Link>
          </Typography>
          <Typography
            variant="body2"
            className={classes.pos}
            color="textSecondary"
          >
            {combineAddress([
              location.address.line1,
              location.address.line2,
              location.address.line3,
              location.address.city,
              location.address.state,
              location.address.zip,
            ])}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Polling Hours
          </Typography>
          <Typography variant="body2">
            {renderPollingHours(location.pollingHours)}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default VotingInfoItem;
