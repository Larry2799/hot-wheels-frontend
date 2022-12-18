import { useSelector } from "react-redux";
import { USER_ROLES } from "../pages/Login/constants/userRoles";

export const useAdmin = () =>
  useSelector((state) => state.auth.role) === USER_ROLES.ADMIN;
