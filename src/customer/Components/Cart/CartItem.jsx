import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  removeCartItem,
  updateCartItem,
} from "../../../Redux/Customers/Cart/Action";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {
  RemoveCartItemNew,
  getCartItems,
  handleRemoveItemFromCart,
} from "../../../action/cart";
import { grey } from "@mui/material/colors";

const CartItem = ({
  item,
  showButton,
  handleRemoveItemFromCart,
  handleUpdateCartMinus,
  handleUpdateCartPlus,
}) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  // const { cartItems } = useSelector((store) => store);

  // const handleRemoveItemFromCart = () => {

  //   RemoveCartItemNew(item.id).then((res)=>{
  //     dispatch(getCartItems());

  //   })
  // };
  const handleUpdateCartItem = (num) => {
    const data = {
      data: { quantity: item.quantity + num },
      cartItemId: item?._id,
      jwt,
    };
    // console.log("update data ", data);
    dispatch(updateCartItem(data));
  };

  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src={item?.productVariant?.images[0]?.url}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item?.productVariant?.name}</p>
          {/* <p className="opacity-70">Size: {item?.size},White</p>
          <p className="opacity-70 mt-2">Seller: {item?.product?.brand}</p> */}
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">
              ₹{item?.productVariant.price / 100}
            </p>
            <p className="font-semibold text-lg">
              ₹{item?.productVariant.price / 100}
            </p>
            <p className="text-green-600 font-semibold">10% off</p>
          </div>
        </div>
      </div>
      {showButton && (
        <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2 ">
            <IconButton
              onClick={(e) => handleUpdateCartMinus(e, item.id, item.quantity)}
              disabled={item?.quantity <= 1}
              color="primary"
              aria-label="add an alarm"
            >
              <RemoveCircleOutlineIcon />
            </IconButton>

            <span className="py-1 px-7 border rounded-sm">
              {item?.quantity}
            </span>
            <IconButton
              onClick={(e) => handleUpdateCartPlus(e, item.id, item.quantity)}
              color="primary"
              aria-label="add an alarm"
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
            <Button
              onClick={(e) => handleRemoveItemFromCart(e, item.id)}
              variant="contained"
              sx={{ bgcolor: grey[900] }}
            >
              Remove{" "}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
