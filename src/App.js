import React from "react";
import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Navigation from "./customer/Components/Navbar/Navigation";
import CustomerRoutes from "./Routers/CustomerRoutes";
import AdminRoutes from "./Routers/AdminRoutes";
import NotFound from "./Pages/Notfound";
import AdminPannel from "./Admin/AdminPannel";
import Componentaaa from "./Routers/versal";
// import Routers from './Routers/Routers';

function App() {
  console.log(process.env.PAYPAL_CLIENT_ID);

  const isAdmin = true;
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
        <Route path="/admin/*" element={<AdminPannel />} />
        {/* <Route path="/test" element={<Componentaaa />} /> */}
      </Routes>
    </div>
  );
}

export default App;
