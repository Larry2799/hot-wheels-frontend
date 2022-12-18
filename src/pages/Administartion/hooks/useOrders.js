import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersStart } from "../actions";

export const useOrders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersStart());
  }, [dispatch]);

  const orders = useSelector((state) => state.administration.orders);

  return [orders];
};
