import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import { editItem, removeItemFromOrder, sendOrderStart } from "../actions";
import { calculateTotalPrice } from "../utils";

const ShoppingCartContainer = ({}) => {
  const { itemsList } = useSelector((state) => state.shoppingCart);
  console.log(
    "shoping",
    useSelector((state) => state)
  );
  const dispatch = useDispatch();

  const handleRemoveFromCart = useCallback(
    (itemId) => {
      dispatch(removeItemFromOrder(itemId));
    },
    [itemsList]
  );

  const onHandleItemChange = useCallback(
    (payload) => {
      if (payload.fieldToEdit === "quantity") {
        if (+payload.value <= 1) {
          dispatch(
            editItem({
              id: payload.id,
              value: 1,
              fieldToEdit: "quantity",
            })
          );
        } else {
          dispatch(editItem(payload));
        }
      } else {
        dispatch(editItem(payload));
      }
    },
    [itemsList]
  );

  const onHandleSubmit = useCallback(
    (data) => {
      const totalPrice = calculateTotalPrice(itemsList);

      dispatch(sendOrderStart({ ...data, totalPrice }));
    },
    [itemsList]
  );

  return (
    <ShoppingCart
      handleRemoveFromCart={handleRemoveFromCart}
      itemsList={itemsList}
      onHandleItemChange={onHandleItemChange}
      onHandleSubmit={onHandleSubmit}
    />
  );
};

ShoppingCartContainer.propTypes = {};

export default React.memo(ShoppingCartContainer);
