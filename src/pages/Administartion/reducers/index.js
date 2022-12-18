import { handleActions } from "redux-actions";
import * as actions from "../actions/index";

export const initialState = {
  orders: [],
  list: [],
  isLoading: false,
  errors: null,
};

export default handleActions(
  {
    [actions.getOrdersStart](state) {
      return { ...state, isLoading: true };
    },
    [actions.getOrdersSuccess](state, { payload }) {
      return { ...state, isLoading: false, orders: payload };
    },
    [actions.getOrdersFail](state, { payload }) {
      return { ...state, isLoading: false, errors: payload };
    },
    [actions.getUsersStart](state) {
      return { ...state, isLoading: true };
    },
    [actions.getUsersSuccess](state, { payload }) {
      return { ...state, isLoading: false, list: [...payload] };
    },
    [actions.getUsersFail](state, { payload }) {
      return { ...state, isLoading: false, errors: payload };
    },
  },
  initialState
);
