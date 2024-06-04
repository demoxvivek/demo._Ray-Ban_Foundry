import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getCartItems,
  RemoveCartItemNew,
  updateCartQtyNEW,
} from "../../../action/cart";
import { toast, Toaster } from "react-hot-toast";
import DeleteIcon from "@mui/icons-material/Delete";
const getEstimatedDeliveryDate = () => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 5);
  const options = { weekday: "short", month: "short", day: "numeric" };
  return currentDate.toLocaleDateString("en-US", options);
};
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const { data } = useSelector((store) => store.cartItems.cartItems);
  const [showCouponForm, setShowCouponForm] = useState(false);
  const estimatedDeliveryDate = getEstimatedDeliveryDate();
  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  const handleRemoveItemFromCart = (lineId) => {
    dispatch(RemoveCartItemNew(lineId));
  };

  const handleUpdateCartQty = (lineId, newQty) => {
    updateCartQtyNEW({ lineId, quantity: newQty }, toast).then(() => {
      dispatch(getCartItems());
    });
  };

  const toggleCouponForm = () => {
    setShowCouponForm(!showCouponForm);
  };

  const subtotal =
    data?.activeOrder?.lines?.reduce(
      (acc, item) => acc + item.linePriceWithTax / 100,
      0
    ) || 0;

  const buttonClasses = "px-2 py-1 border";
  const textClasses = "text-zinc-600 dark:text-zinc-400";
  const priceClasses = "text-green-600 dark:text-green-400";

  return (
    <div className="max-w-7xl mx-auto p-4">
      {data?.lines?.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <Toaster />
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-zinc-800 border">
              <thead className="bg-zinc-100 dark:bg-zinc-700">
                <tr>
                  <th className="text-left px-6 py-3 border-b">
                    Product details
                  </th>
                  <th className="text-left px-6 py-3 border-b">Quantity</th>
                  <th className="text-left px-6 py-3 border-b hidden lg:table-cell">
                    Delivery Date
                  </th>
                  <th className="text-left px-6 py-3 border-b">Price</th>
                </tr>
              </thead>
              <tbody>
                {data?.activeOrder?.lines?.map((item, index) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 border-b relative">
                      <div className="flex flex-col items-center mt-2 sm:flex-row md:flex-row gap-4">
                        <div className="flex flex-col items-center sm:flex-row md:flex-row gap-4">
                          <img
                            src={item?.productVariant?.featuredAsset?.preview}
                            alt="Product Image"
                            className="w-[130px] h-auto mr-4"
                          />
                          <div>
                            <p className="font-semibold">
                              {item.productVariant.name}
                            </p>
                            <p className={textClasses}>
                              Quantity: {item.quantity}
                            </p>
                            <p>
                              Unit Price: ₹
                              {(
                                item.productVariant.priceWithTax / 100
                              )?.toLocaleString()}
                            </p>
                          </div>
                        </div>
                        {/* <span onClick={() => handleRemoveItemFromCart(item)} className="absolute top-0 right-10 font-semibold text-red-500 text-sm mt-2 inline-block">× Remove</span> */}
                      </div>
                    </td>
                    <td className="px-6 py-4 border-b">
                      <div className="flex items-center">
                        <button
                          onClick={() =>
                            handleUpdateCartQty(item.id, item.quantity - 1)
                          }
                          className={`${buttonClasses} ${
                            item.quantity <= 1 ? "bg-gray-300" : "bg-white-500"
                          } `}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleUpdateCartQty(item.id, item.quantity + 1)
                          }
                          className={buttonClasses}
                        >
                          +
                        </button>
                        <button
                          onClick={() => handleRemoveItemFromCart(item.id)}
                          className={`${buttonClasses} ml-4`}
                        >
                          {" "}
                          <DeleteIcon />{" "}
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 border-b hidden lg:table-cell">
                      <p className={priceClasses}>
                        <span style={{ color: "black" }}>
                          Estimated Delivery Date
                        </span>
                        <br /> {estimatedDeliveryDate}
                      </p>
                    </td>
                    <td className="px-6 py-4 border-b">
                      <p>₹{(item.linePriceWithTax / 100)?.toLocaleString()}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <p
              className="text-lg font-semibold mb-2"
              onClick={toggleCouponForm}
            >
              Apply Discount Code +
            </p>
            {showCouponForm ? (
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Enter discount code"
                  className="border px-4 py-2 mr-2"
                />
                <button className="bg-black text-white px-4 py-2">
                  ACTIVATE CODE
                </button>
              </div>
            ) : (
              <button className="text-blue-500 underline"></button>
            )}
          </div>
          <div className="mt-8 flex justify-end">
            <div className="w-full max-w-md">
              <hr className="mt-2 mb-2" />
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <hr className="mt-2 mb-2" />
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping (Free Shipping)</span>
                <span>₹0.00</span>
              </div>
              <hr className="mt-2" />
              <div className="flex justify-between font-bold border-t pt-2">
                <span>ORDER TOTAL</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <hr className="mt-2 mb-2" />
              <Link to="/checkout?step=1">
                <button className="bg-red-500 text-white w-full py-2 mt-4">
                  CHECKOUT NOW
                </button>
              </Link>
              <hr />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const EmptyCart = () => {
  const containerStyles = "flex flex-col items-start p-8 dark:text-white";
  const titleStyles = "text-2xl font-bold mb-4";
  const paragraphStyles = "mb-2";
  const linkStyles = "text-blue-500 underline";

  return (
    <div className={containerStyles}>
      <h1 className={titleStyles}>SHOPPING CART</h1>
      <p className={paragraphStyles}>
        You have no items in your shopping cart.
      </p>
      <a href="#" className={linkStyles}>
        Click here to continue shopping.
      </a>
    </div>
  );
};

export default Cart;
