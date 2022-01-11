import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import LeftNavbar from "../Navabar/LeftNavbar";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 0,
    margin: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <LeftNavbar />
          </IconButton>
          <Link to="/">
            <Typography
              style={{ textDecoration: "none", color: "white" }}
              className={classes.title}
              variant="h6"
              noWrap
            >
              TV24Marathi
            </Typography>
          </Link>
          <div className="nav-links">
            <ul>
              <Container
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  textDecoration: "none",
                  color: "white",
                }}
                noWrap
              >
                <li style={{ marginRight: "5px" }}>
                  <Link to="/">
                    <Typography variant="h6" color="inherit">
                      Home
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link to="/business">
                    <Typography variant="h6" color="inherit">
                      Business
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Typography variant="h6" color="inherit">
                      Business
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Typography variant="h6" color="inherit">
                      Business
                    </Typography>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Typography variant="h6" color="inherit">
                      Business
                    </Typography>
                  </Link>
                </li>
              </Container>
            </ul>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
