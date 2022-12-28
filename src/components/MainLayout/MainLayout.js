import React, { useEffect } from "react";
import Header from "../Header/Header";
import { checkToken } from "../../actions/globalActions";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/Footer";

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkToken());
  }, [isAuth]);

  return (
    <div className="main-container" style={{ overflow: "hidden" }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {};

export default React.memo(MainLayout);
