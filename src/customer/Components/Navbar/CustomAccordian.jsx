import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Redux/Auth/Action";
import OpenSunglasses from "./OpenSunglasses";

const CustomAccordion = ({
  drawer,
  setDrawer,
  sunglasses,
  eyeGlasses,
  pages,
}) => {
  const [openIndex, setOpenIndex] = useState(null);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const [sidebarItems, setSidebarItems] = useState([
    {
      name: "MY ACCOUNT",
      children: jwt
        ? [
            { name: "MY ORDERS" },
            { name: "MY STORE CREDIT" },
            { name: "MY SELECTIONS" },
            { name: "LOGOUT" },
          ]
        : [
            { name: "LOGIN", address: "/sign-in" },
            { name: "MY ORDERS" },
            { name: "MY STORE CREDIT" },
            { name: "MY SELECTIONS" },
            { name: "GIFT CARD BALANCE" },
          ],
    },
    { name: "SUNGLASSES", component: OpenSunglasses, data: sunglasses },
    { name: "EYEGLASSES", component: OpenSunglasses, data: eyeGlasses },
    { name: "NEW ARRIVALS" },
    { name: "ORDER STATUS" },
    { name: "PROMO" },
  ]);

  useEffect(() => {
    setSidebarItems([
      {
        name: "MY ACCOUNT",
        children: jwt
          ? [
              { name: "MY ORDERS", address: "/account/order" },
              { name: "MY STORE CREDIT" },
              { name: "MY SELECTIONS" },
              { name: "LOGOUT", address: "/" },
            ]
          : [
              { name: "LOGIN", address: "/sign-in" },
              { name: "MY STORE CREDIT" },
              { name: "MY SELECTIONS" },
              { name: "GIFT CARD BALANCE" },
            ],
      },
      { name: "SUNGLASSES", component: OpenSunglasses, data: sunglasses },
      { name: "EYEGLASSES", component: OpenSunglasses, data: eyeGlasses },
      { name: "NEW ARRIVALS" },
      { name: "ORDER STATUS" },
      { name: "PROMO" },
    ]);
  }, [jwt, sunglasses, eyeGlasses]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("jwt");
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <AccordionWrapper>
        {sidebarItems.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionButton onClick={() => toggleAccordion(index)}>
              <div>{item.name}</div>
              {(item.children || item.component) && (
                <div>{openIndex === index ? "-" : "+"}</div>
              )}
            </AccordionButton>
            {item.component && openIndex === index && (
              <item.component data={item.data} />
            )}
            {item.children && openIndex === index && (
              <AccordionContent isOpen={openIndex === index}>
                <NestedAccordionContent>
                  {item.children.map((child, childIndex) =>
                    child.name === "LOGOUT" ? (
                      <NestedLink key={childIndex} onClick={handleLogout}>
                        {child.name}
                      </NestedLink>
                    ) : (
                      <Link key={childIndex} to={child.address || "#"}>
                        <NestedLink>{child.name}</NestedLink>
                      </Link>
                    )
                  )}
                </NestedAccordionContent>
              </AccordionContent>
            )}
          </AccordionItem>
        ))}
      </AccordionWrapper>
    </div>
  );
};

export default CustomAccordion;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AccordionWrapper = styled.div`
  width: 100%;
  z-index: 20;
`;

const AccordionItem = styled.div`
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const AccordionButton = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #f9f9f9;
  border: none;
  padding: 15px 20px;
  text-align: left;
  cursor: pointer;
  outline: none;
  border-radius: 5px 5px 0 0;
  transition: background-color 0.3s;

  &:hover {
    background-color: #eaeaea;
  }

  div {
    font-size: 16px;
    color: #333;
    font-weight: bold;
  }
`;

const AccordionContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  animation: ${fadeIn} 0.5s ease;
  border-top: 1px solid #f0f0f0;
  border-radius: 0 0 5px 5px;
  padding: 15px 20px;
`;

const NestedAccordionContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const NestedLink = styled.div`
  display: block;
  text-decoration: none;
  color: #333;
  padding: 10px;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.3s;
  curser: pointer;
  &:hover {
    background-color: #f9f9f9;
  }
`;
