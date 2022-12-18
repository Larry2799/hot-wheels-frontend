import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import logo from "../../static/logo.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    height: 100,
    marginBottom: 50,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(3),
  },
}));

export default function Footer() {
  const classes = useStyles();

  console.log(classes, "classes2");

  return (
      <footer className={classes.footer}>
        <Divider className={classes.divider}/>
        <Container className={classes.container}>
          <Paper elevation={0}>
            <img src={logo}/>
          </Paper>
          <div>
            <Typography variant="body2" color="textSecondary">
              {"Hot Wheels - Интернет магазин литых дисков в Минске"}
            </Typography>
          </div>


          <div>
            <Typography variant="body2" color="textSecondary">
              {"contact@hotwheels.com"}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {"г.Минск, ул. Промышленная 6а"}
            </Typography>
          </div>

          <div>
            <Typography variant="body2" color="textSecondary">
              {"+375 (17) 270-00-31\n"}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {"+375 (44) 733-44-33"}
            </Typography>
          </div>
        </Container>
      </footer>
  );
}
