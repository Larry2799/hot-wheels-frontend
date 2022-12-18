import axios from "axios";
import { all, put, takeEvery } from "redux-saga/effects";
import api from "../../../config/apiConfig";
import * as actions from "../actions";
import * as apiCalls from "../../UserDashboard/api/index";
import { getOrders } from "../api";

function* getAllOrders() {
  try {
    const response = yield getOrders();

    console.log("SAGA", response.data);

    yield put(actions.getOrdersSuccess(response.data));
  } catch (error) {
    yield put(actions.getOrdersFail(error.message));
  }
}

function* getAllOrdersWatcher() {
  yield takeEvery(actions.getOrdersStart, getAllOrders);
}

export function* getAllOrdersSaga() {
  yield all([getAllOrdersWatcher()]);
}

function* getUsers() {
  try {
    const token = yield localStorage.getItem("token");

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    const response = yield apiCalls.getUsers();

    yield put(actions.getUsersSuccess(response.data));
  } catch (error) {
    yield put(actions.getUsersFail());
  }
}

function* getUsersWatcher() {
  yield takeEvery(actions.getUsersStart, getUsers);
}

export function* administrationSaga() {
  yield all([getUsersWatcher(), getAllOrdersSaga()]);
}
