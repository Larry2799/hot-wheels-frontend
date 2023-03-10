import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";
import { authSaga } from "../pages/Login/sagas/index";
import { userDashboardSaga } from "../pages/UserDashboard/sagas";
import { orderSaga } from "../pages/ShoppingCart/sagas";
import { administrationSaga } from "../pages/Administartion/sagas";

function* rootSaga() {
  yield all([
    authSaga(),
    userDashboardSaga(),
    orderSaga(),
    administrationSaga(),
  ]);
}

export default rootSaga;
