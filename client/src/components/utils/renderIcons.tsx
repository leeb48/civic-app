import { Link, IconButton } from "@material-ui/core";

import { SNSType } from "../../store/interfaces";

import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import React from "react";

export const renderSNS = (snsType: SNSType, snsUrl: string) => {
  switch (snsType) {
    case "Facebook":
      return (
        <IconButton component={Link} target="_blank" href={snsUrl}>
          <FacebookIcon style={{ fill: "#4267B2" }} />
        </IconButton>
      );
    case "Twitter":
      return (
        <IconButton component={Link} target="_blank" href={snsUrl}>
          <TwitterIcon style={{ fill: "#1DA1F2" }} />
        </IconButton>
      );
    case "YouTube":
      return (
        <IconButton component={Link} target="_blank" href={snsUrl}>
          <YouTubeIcon style={{ fill: "#FF0000" }} />
        </IconButton>
      );
    default:
      return <NotInterestedIcon />;
  }
};

export const renderSNSForRepresentatives = (
  snsType: SNSType,
  snsUrl: string
) => {
  switch (snsType) {
    case "Facebook":
      return (
        <IconButton
          component={Link}
          target="_blank"
          href={`https://www.facebook.com/${snsUrl}`}
        >
          <FacebookIcon style={{ fill: "#4267B2" }} />
        </IconButton>
      );
    case "Twitter":
      return (
        <IconButton
          component={Link}
          target="_blank"
          href={`https://www.twitter.com/${snsUrl}`}
        >
          <TwitterIcon style={{ fill: "#1DA1F2" }} />
        </IconButton>
      );
    case "YouTube":
      return (
        <IconButton
          component={Link}
          target="_blank"
          href={`https://www.youtube.com/${snsUrl}`}
        >
          <YouTubeIcon style={{ fill: "#FF0000" }} />
        </IconButton>
      );
    default:
      return <NotInterestedIcon />;
  }
};

export const renderCandidateIcon = (party: string) => {
  switch (party) {
    case "Democratic":
    case "Democratic Party":
      return <AssignmentIndIcon style={{ fill: "#00509d" }} />;

    case "Republican":
    case "Republican Party":
      return <AssignmentIndIcon style={{ fill: "#DE0100" }} />;

    case "Libertarian":
    case "Libertarian Party":
      return <AssignmentIndIcon style={{ fill: "#fdc500" }} />;

    case "Independent American":
    case "Independent American Party":
      return <AssignmentIndIcon style={{ fill: "#38b000" }} />;

    case "Nonpartisan":
      return <AssignmentIndIcon style={{ fill: "#495057" }} />;

    default:
      return <AssignmentIndIcon />;
  }
};
