import React from "react";
import EmptyStatePage from "../../components/EmptyStatePage/EmptyStatePage";
import EmptyOrderImage from "../../static/forbidden.svg";
import { useStyles } from "./style";
import AllOrdersList from "./components/AllOrdersList";
import { useOrders } from "./hooks/useOrders";

const Administration = () => {
  const [orders] = useOrders();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.customPaper}>Активные заказы:</div>
      {orders?.length > 0 ? (
        <AllOrdersList orders={orders} />
      ) : (
        <EmptyStatePage
          routToGo={"/"}
          text={"У вас нет активных заказов"}
          imageUrl={EmptyOrderImage}
          buttonText={"Отправиться в магазин"}
          isAtDash
        />
      )}
    </div>
  );
};

export default Administration;
