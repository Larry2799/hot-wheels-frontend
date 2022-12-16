import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Shop from "../components/Shop/Shop";
import {
  addItemToOrder,
  removeItemFromOrder,
} from "../../ShoppingCart/actions";
import {availableRadius} from "../config";

const DEFAULT_RADIUS = availableRadius[0];


const ShopContainer = ({}) => {
  const dispatch = useDispatch();
  const cartItemsSelector = useSelector(
    (state) => state.shoppingCart.itemsList
  );

  const handleAddToCart = useCallback((itemToAdd) => {
    dispatch(
      addItemToOrder({ ...itemToAdd, quantity: 1, diameter: DEFAULT_RADIUS})
    );
  }, []);

  const handleRemoveFromCart = useCallback(
    (itemId) => {
      dispatch(removeItemFromOrder(itemId));
    },
    [cartItemsSelector]
  );

  return (
    <Shop
      handleAddToCart={handleAddToCart}
      handleRemoveFromCart={handleRemoveFromCart}
      cartItems={cartItemsSelector}
    />
  );
};

ShopContainer.propTypes = {};

export default React.memo(ShopContainer);
