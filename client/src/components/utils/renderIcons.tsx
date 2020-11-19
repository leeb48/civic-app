import React from "react";

// Interface Imports
import { SNSType } from "../../store/interfaces";

// Material UI Imports
import { Link, IconButton } from "@material-ui/core";

// Icon Imports
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

// Render SNS with url links when full snsUrls are provided
export const renderSNSFullLink = (snsType: SNSType, snsUrl: string) => {
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

// Render SNS with url links when only the SNS id are povided
export const renderSNSIdOnly = (snsType: SNSType, snsId: string) => {
  switch (snsType) {
    case "Facebook":
      return (
        <IconButton
          component={Link}
          target="_blank"
          href={`https://www.facebook.com/${snsId}`}
        >
          <FacebookIcon style={{ fill: "#4267B2" }} />
        </IconButton>
      );
    case "Twitter":
      return (
        <IconButton
          component={Link}
          target="_blank"
          href={`https://www.twitter.com/${snsId}`}
        >
          <TwitterIcon style={{ fill: "#1DA1F2" }} />
        </IconButton>
      );
    case "YouTube":
      return (
        <IconButton
          component={Link}
          target="_blank"
          href={`https://www.youtube.com/${snsId}`}
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
