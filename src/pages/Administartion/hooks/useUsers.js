import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersStart } from "../actions";

export const useUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersStart());
  }, [dispatch]);

  const users = useSelector((state) => state.user.list);

  return [users];
};
