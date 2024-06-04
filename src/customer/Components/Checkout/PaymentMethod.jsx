import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  Alert,
} from "@mui/material";
import AddressCard from "../adreess/AdreessCard"; // Corrected import path
import OrderSummary from "./OrderSummary";
import EditAddressModal from "./EditAddressModal";
import { useNavigate } from "react-router-dom";
import PaymentOptions from "./PaymentOption";

const PaymentMethod = () => {
  const [showShippingAddress, setShowShippingAddress] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedAddress = JSON.parse(localStorage.getItem("shippingAddress"));
    if (storedAddress) {
      setShippingAddress(storedAddress);
    }
  }, []);

  // const handleCheckboxChange = (event) => {
  //   setShowShippingAddress(event.target.checked);
  //   if (!event.target.checked) {
  //     setShippingAddress(null);
  //     localStorage.removeItem('shippingAddress');
  //   } else {
  //     setError('');
  //   }
  // };

  const handleEditAddress = () => {
    setIsEditModalOpen(true);
  };

  const handleSaveAddress = (updatedAddress) => {
    setShippingAddress(updatedAddress);
    localStorage.setItem("shippingAddress", JSON.stringify(updatedAddress));
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handlePlaceOrder = () => {
    // if (!showShippingAddress) {
    //   setError('Please confirm that your billing and shipping address are the same.');
    // } else {
    // }
    navigate("/payment");
  };

  return (
    <Box
      sx={{
        width: "100%",
        p: 4,
        my: 4,
        border: "1px solid #E5E7EB",
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <div className="flex flex-col md:flex-row justify-between gap-6 align-center">
        <div className={`w-full md:w-2/3`}>
          <Typography
            variant="h4"
            component="h1"
            className={`text-lg font-bold mb-8`}
          >
            Order Summary
          </Typography>
          <hr />

          {/* <Typography variant="body3" className={`text-red-500 mb-6 mt-6`}>
            Due to Contactless Delivery Option, COD Payment method is disabled.
          </Typography> */}
          <div className="mt-6">
            {/* <Typography
              variant="subtitle3"
              className={`font-semibold mt-4 mb-4`}
            >
              Credit Card / Debit Card / Netbanking / UPI
            </Typography>
            <hr className="mb-2" />
            <Typography variant="body2" className="text-zinc-600 mb-6">
              You will be redirected to CCAvenue website when you place an
              order.
            </Typography> */}
          </div>
          {/* <div className={`bg-zinc-100 p-4 mb-4 rounded`}>
            <PaymentOptions />
          </div> */}
          {/* <FormControlLabel
            control={
              <Checkbox
                checked={showShippingAddress}
                onChange={handleCheckboxChange}
                sx={{ color: '#EF4444', '&.Mui-checked': { color: '#EF4444' } }}
              />
            }
            label="My billing and shipping address are the same"
            className={`flex items-center mb-4`}
          /> */}
          {/* {showShippingAddress && shippingAddress && ( */}
          <div className={`text-zinc-600 mb-4`}>
            <AddressCard address={shippingAddress} />
            <Button
              variant="contained"
              onClick={handleEditAddress}
              sx={{ backgroundColor: "#EF4444", color: "white", mt: 2 }}
            >
              Edit
            </Button>
            <EditAddressModal
              open={isEditModalOpen}
              onClose={handleCloseEditModal}
              addressData={shippingAddress}
              onSave={handleSaveAddress}
            />
          </div>
          {/* )} */}
        </div>
        <div className="w-full md:w-1/3">
          <OrderSummary />
        </div>
      </div>
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
      <Box
        sx={{
          borderTop: "1px solid #E5E7EB",
          py: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#EF4444",
            color: "white",
            paddingX: 6,
            paddingY: 2,
          }}
          onClick={handlePlaceOrder}
        >
          Proceed to Pay
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentMethod;
