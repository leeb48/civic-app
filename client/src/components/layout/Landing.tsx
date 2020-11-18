import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import vote from "../../img/vote.jpg";
import representative from "../../img/representative.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: { marginTop: "3rem" },
  card: { marginBottom: "3rem" },
  media: {
    height: 300,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const Landing = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container justify="center">
      <Grid
        xs={12}
        sm={6}
        direction="column"
        justify="space-around"
        item
        container
      >
        <Card className={classes.card}>
          <CardActionArea component={Link} to="/representatives">
            <CardMedia
              className={classes.media}
              image={representative}
              title="representative"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                Find Your Representatives
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea component={Link} to="/elections">
            <CardMedia className={classes.media} image={vote} title="vote" />
            <CardContent>
              <Typography variant="h5" component="h2">
                Find Your Elections
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Landing;
