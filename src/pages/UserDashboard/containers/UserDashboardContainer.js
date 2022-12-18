import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserDashboardLayout from "../components/UserDashboardLayout/UserDashboardLayout";
import { getUserProfileStart } from "../actions";
import Spinner from "../../../components/Spinner/Spinner";
import {useUserInfo} from "../../../hooks/useUserInfo";

const UserDashboardContainer = () => {
  const dispatch = useDispatch();
  const userProfile = useUserInfo();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    dispatch(getUserProfileStart());
  }, [dispatch]);

  return isLoading ? (
    <Spinner />
  ) : (
    <UserDashboardLayout userProfile={userProfile} />
  );
};

UserDashboardContainer.propTypes = {};

export default UserDashboardContainer;
