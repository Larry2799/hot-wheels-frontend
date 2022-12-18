import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../config/routesNames";
import LoginContainer from "../pages/Login/containers/LoginContainer";
import PrivateRoute from "./PrivateRoute";
import UserDashboardContainer from "../pages/UserDashboard/containers/UserDashboardContainer";
import ShopContainer from "../pages/Shop/containers/ShopContainer";
import ShoppingCartContainer from "../pages/ShoppingCart/containers/ShoppingCartContainer";
import Administration from "../pages/Administartion/Administration";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={ShopContainer} />
      <Route exact path={ROUTES.LOGIN} component={LoginContainer} />
      <PrivateRoute exact path={ROUTES.ADMINISTRATION} component={Administration} />
      <PrivateRoute
        exact
        path={ROUTES.PROFILE}
        component={UserDashboardContainer}
      />
      <PrivateRoute exact path={ROUTES.CART} component={ShoppingCartContainer} />
    </Switch>
  );
};
