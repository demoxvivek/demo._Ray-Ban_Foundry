import React from "react";
import { useSelector } from "react-redux";

// Fallback static data
const staticCart = {
  id: "2",
  lines: [
    {
      id: "3",
      quantity: 1,
      linePrice: 8490,
      productVariant: {
        id: "91",
        name: "AVIATOR GRADIENT Standard Gold Gradient Blue",
        price: 8490,
        currencyCode: "INR",
        images: [
          {
            url: "http://49.206.253.146:3000/assets/preview/6e/ag1__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/27/ag2__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/d0/ag-s_l-g-gb__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/07/ag-s_l-g-gb1__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/c1/ag-s_l-g-gb2__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/81/ag-s_l-g-gb3__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/e4/ag-s_l-g-gb4__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/83/ag-s_l-g-gb5__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/ac/ag-s_l-g-gb6__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/fa/ag-s_l-g-gb7__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/9c/ag-s_l-g-gb8__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/87/ag-s_l-g-gb9__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/fe/ag-s_l-g-gb10__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/e1/ag-s_l-g-gb11__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/09/ag-s_l-g-gb12__preview.png",
          },
        ],
      },
    },
    {
      id: "4",
      quantity: 1,
      linePrice: 8490,
      productVariant: {
        id: "92",
        name: "AVIATOR GRADIENT Large Gold Gradient Blue",
        price: 8490,
        currencyCode: "INR",
        images: [
          {
            url: "http://49.206.253.146:3000/assets/preview/6e/ag1__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/27/ag2__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/09/ag-s_l-g-gb12__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/e1/ag-s_l-g-gb11__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/87/ag-s_l-g-gb9__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/fe/ag-s_l-g-gb10__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/fa/ag-s_l-g-gb7__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/9c/ag-s_l-g-gb8__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/ac/ag-s_l-g-gb6__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/83/ag-s_l-g-gb5__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/81/ag-s_l-g-gb3__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/e4/ag-s_l-g-gb4__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/c1/ag-s_l-g-gb2__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/07/ag-s_l-g-gb1__preview.png",
          },
          {
            url: "http://49.206.253.146:3000/assets/preview/d0/ag-s_l-g-gb__preview.png",
          },
        ],
      },
    },
  ],
};

const OrderSummary = () => {
  // Extract cart data from Redux store
  const cartState = useSelector((store) => store.cartItems.cartItems);
  const cart = cartState?.data || staticCart;

  // Determine products to display
  const products = cart?.activeOrder?.lines.map((line, i) => ({
    name: line.productVariant.name,
    quantity: line.quantity,
    price: `₹${(line.linePriceWithTax / 100).toLocaleString()}.00`,
    image: line?.productVariant?.featuredAsset?.preview,
  }));

  // Calculate subtotal, shipping, and total
  const subtotal = `₹${cart?.activeOrder?.lines
    .reduce((acc, line) => acc + line?.linePriceWithTax / 100, 0)
    .toLocaleString()}.00`;
  const shipping = "₹0.00";
  const total = subtotal; // Assuming no additional charges other than subtotal

  return (
    <div className="w-full bg-zinc-100 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Order Summary</h2>
      <hr />
      <div className="flex justify-between mb-2">
        <span className="mt-2 mb-2">Cart Subtotal</span>
        <span className="mt-2 mb-2">{subtotal}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="mt-2 mb-2">Shipping</span>
        <span className="mt-2 mb-2">{shipping}</span>
      </div>
      <hr />
      <div className="flex justify-between mb-2 mt-2">
        <span className="font-bold">ORDER TOTAL</span>
        <span className="font-bold">{total}</span>
      </div>
      <hr />
      <p className="mb-4">{products?.length} Items in Cart</p>
      <hr />
      {products?.map((product, index) => (
        <div className="flex items-center p-4 mb-4 border-2" key={index}>
          <img
            src={product?.image}
            alt="Product Image"
            className="w-30 h-20 mr-4 object-contain "
          />
          <div>
            <p className="font-semibold">{product?.name}</p>
            <p className="text-sm text-zinc-600">Qty: {product?.quantity}</p>
            <p className="text-sm text-zinc-600">{product?.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderSummary;
