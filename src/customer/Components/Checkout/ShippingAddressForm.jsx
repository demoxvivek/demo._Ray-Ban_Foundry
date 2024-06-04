import React, { useState } from "react";
import OrderSummary from "./OrderSummary";

const ShippingAddressForm = ({ handleNext }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetLine1: "",
    streetLine2: "",
    city: "",
    postalCode: "",
    countryCode: "IN",
    phoneNumber: "",
    state: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone Number is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      localStorage.setItem("shippingAddress", JSON.stringify(formData));
      console.log("Shipping address saved to localStorage:", formData);
      handleNext();
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between border-2 p-4">
      <div className="lg:w-[60%]">
        <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
        <hr className="mb-4" />
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-zinc-700">
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                className="w-full border border-zinc-300 p-2"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && (
                <p className="text-red-600">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-zinc-700">
                Last Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                className="w-full border border-zinc-300 p-2"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {errors.lastName && (
                <p className="text-red-600">{errors.lastName}</p>
              )}
            </div>
            <div>
              <label className="block text-zinc-700">
                Street Address <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="streetLine1"
                className="w-full border border-zinc-300 p-2"
                value={formData.streetLine1}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-zinc-700">Apartment/Unit/Flat</label>
              <input
                type="text"
                name="streetLine2"
                className="w-full border border-zinc-300 p-2"
                value={formData.streetLine2}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-zinc-700">City</label>
              <input
                type="text"
                name="city"
                className="w-full border border-zinc-300 p-2"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-zinc-700">
                Postal Code <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="postalCode"
                className="w-full border border-zinc-300 p-2"
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-zinc-700">State/Province</label>
              <input
                type="text"
                name="state"
                className="w-full border border-zinc-300 p-2"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-zinc-700">Country Code</label>
              <input
                type="text"
                name="countryCode"
                className="w-full border border-zinc-300 p-2"
                value={formData.countryCode}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-zinc-700">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="phoneNumber"
                className="w-full border border-zinc-300 p-2"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              {errors.phoneNumber && (
                <p className="text-red-600">{errors.phoneNumber}</p>
              )}
            </div>
          </div>
          <button type="submit" className="bg-red-600 text-white p-2 w-full">
            NEXT
          </button>
        </form>
      </div>
      <div className="lg:w-[35%] mb-6 lg:mb-0">
        <OrderSummary />
      </div>
    </div>
  );
};

export default ShippingAddressForm;
