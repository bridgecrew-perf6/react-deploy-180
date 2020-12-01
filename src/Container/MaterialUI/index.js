import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";
import SaveIcon from "@material-ui/icons/Save";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { green, orange } from "@material-ui/core/colors";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import "fontsource-roboto";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    "& > *": {
      //   margin: theme.spacing(1),
    },
  },

  button: {
    background: "linear-gradient(45deg, black, rgba(0, 0, 0, .3))",
    padding: "8px 15px",
    borderRadius: "20px",
    color: "white",
  },

  title: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const theme = createMuiTheme({
  typography: {
    subtitle1: {
      marginBottom: "20px",
    },
  },
  //   palette: {
  //     primary: {
  //       main: orange[900],
  //     },
  //     secondary: {
  //       main: green[500],
  //     },
  //   },
});

function ButtonWithStyle() {
  const myStyle = useStyle();
  return <Button className={myStyle.button}>Hello World</Button>;
}

function CheckBoxExample() {
  const [Checked, setChecked] = React.useState(true);

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={Checked}
          onChange={(e) => setChecked(e.target.checked)}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        ></Checkbox>
      }
      label="Check Me!"
    />
  );
}

const MaterialUI = () => {
  const myStyle = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <div className={myStyle.root}>
          <AppBar color="primary">
            <ToolBar>
              <IconButton className={myStyle.menuButton}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={myStyle.title}>
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </ToolBar>
          </AppBar>

          <Typography variant="h4" component="div">
            Welcome to MUI
          </Typography>
          <Typography variant="subtitle1">
            Learn How to use Material UI
          </Typography>

          <Grid
            container
            spacing={1}
            justify="center"
            style={{ marginBottom: 20 }}
          >
            <Grid item xs={12} sm="12" lg="12">
              <Paper
                style={{ width: "100%", height: 75, background: "black" }}
              />
            </Grid>
            <Grid item xs={12} sm lg>
              <Paper
                style={{ width: "100%", height: 75, background: "black" }}
              />
            </Grid>
            <Grid item xs={6}>
              <Paper
                style={{ width: "100%", height: 75, background: "black" }}
              />
            </Grid>
          </Grid>

          <ButtonWithStyle />
          <form autoComplete="off">
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  label="With a grid"
                  placeholder="Enter Your Name"
                  color="secondary"
                />
              </Grid>
            </Grid>
          </form>
          <CheckBoxExample />
          <ButtonGroup variant="contained" size="large" color="primary">
            <Button startIcon={<DeleteIcon />}>Add</Button>
            <Button endIcon={<SaveIcon />}>Delete</Button>
          </ButtonGroup>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default MaterialUI;
