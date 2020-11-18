import React from "react";
import { Link } from "react-router-dom";

// Material UI Imports
import {
  AppBar,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";

// Icon Imports
import MenuIcon from "@material-ui/icons/Menu";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    homeButton: {
      "& .MuiSvgIcon-root": {
        width: "3rem",
        height: "3rem",
        marginRight: theme.spacing(1),
      },

      color: "inherit",
    },
  })
);

const Navbar = () => {
  const classes = useStyles();

  // Menu state and handlers
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid justify="space-between" container>
            {/* Home button */}
            <IconButton
              className={classes.homeButton}
              edge="start"
              component={Link}
              to="/"
            >
              <AccountBalanceIcon />
              <Typography variant="h6" className={classes.title}>
                Civic App
              </Typography>
            </IconButton>

            {/* Right Menu */}
            <IconButton
              onClick={handleClick}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                component={Link}
                to="/representatives"
                onClick={handleClose}
              >
                Representatives
              </MenuItem>
              <MenuItem component={Link} to="/elections" onClick={handleClose}>
                Elections
              </MenuItem>
            </Menu>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
