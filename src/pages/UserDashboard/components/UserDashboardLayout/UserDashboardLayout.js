import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./style";
import Paper from "@material-ui/core/Paper";
import "./style.js";
import UserInfoCard from "../UserInfoCard/UserInfoCard";
import OrdersList from "../OrdersList/OrdersList";
import EmptyStatePage from "../../../../components/EmptyStatePage/EmptyStatePage";
import EmptyOrderImage from "../../../../static/forbidden.svg";

const UserDashboardLayout = ({ userProfile }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12}>
        </Grid>
        <Grid item xs={12} sm={5}>
          <div className={classes.customPaper}>Данные пользователя:</div>
          <Paper className={classes.paper}>
            <UserInfoCard userProfile={userProfile} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={7}>
          <div className={classes.customPaper}>Ваши заказы:</div>
          {userProfile?.orders?.length > 0 ? (
            <OrdersList orders={userProfile.orders} />
          ) : (
            <EmptyStatePage
              routToGo={"/"}
              text={"У вас нет активных заказов"}
              imageUrl={EmptyOrderImage}
              buttonText={"Отправиться в магазин"}
              isAtDash
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

UserDashboardLayout.propTypes = {};

export default React.memo(UserDashboardLayout);
