import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../config/routesNames";
import { useStyles } from "./style";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";

import { logOutSuccess } from "../../pages/Login/actions";
import { useAdmin } from "../../hooks/useAdmin";
import * as actionsShoppingCart from "../../pages/ShoppingCart/actions";
import logo from "../../static/logo.png";
import Container from "@material-ui/core/Container";

const Header = ({}) => {
  const { isAuth } = useSelector((state) => state.auth);
  const isAdmin = useAdmin();
  const { itemsList } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = (route) => {
    setAnchorEl(null);
    handleMobileMenuClose();

    if (route) {
      onHandleNavigate(route);
    }
  };

  const onHandleLogout = useCallback(() => {
    dispatch(logOutSuccess());
    dispatch(actionsShoppingCart.clearSuccessState());
    handleMenuClose();
  }, []);

  const onHandleNavigate = useCallback((route) => {
    history.push(route);
  }, []);

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => handleMenuClose(ROUTES.PROFILE)}>
        Profile
      </MenuItem>
      <MenuItem onClick={() => onHandleLogout()}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          aria-label="show 4 new mails"
          color="inherit"
          onClick={
            isAuth
              ? () => onHandleNavigate(ROUTES.CART)
              : () => onHandleNavigate(ROUTES.LOGIN)
          }
        >
          <Badge
            overlap="rectangular"
            badgeContent={itemsList.length}
            color="secondary"
          >
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Goods</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.header}>
          <Typography
            onClick={() => history.push("/")}
            className={classes.title}
            variant="h6"
            noWrap
          >
            {/*<span style={{ fontFamily: "Dancing Script", fontSize: "40px" }}>*/}
            {/*  {"Hot Wheels"}*/}
            {/*</span>*/}
            <Container elevation={0}>
              <img src={logo} />
            </Container>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {isAdmin && isAuth ? (
              <Button
                variant="text"
                style={{ color: "white" }}
                onClick={() => onHandleNavigate(ROUTES.ADMINISTRATION)}
              >
                Administration
              </Button>
            ) : null}
            <IconButton
              className={classes.badge}
              color="inherit"
              onClick={
                isAuth
                  ? () => onHandleNavigate(ROUTES.CART)
                  : () => onHandleNavigate(ROUTES.LOGIN)
              }
            >
              {isAuth ? (
                <div>
                  <Badge
                    overlap="rectangular"
                    badgeContent={itemsList.length}
                    color="secondary"
                  >
                    <ShoppingCartIcon />
                  </Badge>
                </div>
              ) : null}
            </IconButton>
            {isAuth ? (
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            ) : (
              <Button
                onClick={() => onHandleNavigate(ROUTES.LOGIN)}
                className={classes.signButton}
              >
                SignIn/SignUp
              </Button>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default React.memo(Header);
