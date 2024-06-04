import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  //   const { user } = useSelector((store) => store?.auth?.user);
  const auth = useSelector((store) => store?.auth?.user?.user);

  return auth ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
