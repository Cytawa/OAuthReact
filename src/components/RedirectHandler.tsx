import { ACCESS_TOKEN } from "../constants";
import useUrlQuery from "../hooks/useUrlQuery";
import { Navigate } from "react-router-dom";

export const RedirectHandler = () => {
  const query = useUrlQuery();

  const token = query.get("token");

  if (token) {
    localStorage.setItem(ACCESS_TOKEN, token);
    return <Navigate to={"/profile"} />;
  }

  return <Navigate to={"/login"} />;
};
