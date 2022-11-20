import { Outlet, Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import "./Wrapper.css";

export const Wrapper = () => {
  const axios = useAxios();

  return (
    <div className="container">
      <div className="menu-wrapper">
        <Link to={"/"}>System OAUTH2.2</Link>
        <Link to={"/login"}>Zaloguj się</Link>
      </div>
      <Outlet />
    </div>
  );
};
