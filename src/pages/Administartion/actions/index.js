import { createAction } from "redux-actions";

export const getOrdersStart = createAction("GET_ORDERS_START");
export const getOrdersSuccess = createAction("GET_ORDERS_SUCCESS");
export const getOrdersFail = createAction("GET_ORDERS_FAIL");

export const getUsersStart = createAction("GET_USERS_START");
export const getUsersSuccess = createAction("GET_USERS_SUCCESS");
export const getUsersFail = createAction("GET_USERS_FAIL");
