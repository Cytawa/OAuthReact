import { useCallback, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { UserApi } from "../../api/UserApi";
import useAppContext from "../../hooks/useAppContext";
import useAxios from "../../hooks/useAxios";
import "./Wrapper.css";
import { Button, useToast } from "@chakra-ui/react";
import { ACCESS_TOKEN } from "../../constants";

export const Wrapper = () => {
  const axios = useAxios();
  const context = useAppContext();
  const navigate = useNavigate();
  const toast = useToast();

  const fetchUser = useCallback(async () => {
    if (context.currentUser) {
      return;
    }

    const user = await UserApi.getUser();
    context.userModifier(user.data);
  }, [context]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const onLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    context.userModifier(null);

    toast({
      title: "Zostałeś poprawnie wylogowany",
      description:
        "Dla większego bezpieczeństwa zamknij wszystkie okna przegląarki",
      status: "success",
      duration: 4000,
      isClosable: true,
    });

    navigate("/", { replace: true });
  };

  const onLogin = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="menu-wrapper">
        <Link to={"/"}>System OAUTH2.2</Link>
        {!context.currentUser ? (
          <Button onClick={onLogin} colorScheme={"blue"}>
            Zaloguj się
          </Button>
        ) : (
          <div className="nav-logged">
            <span>
              Zalogowany jako:{" "}
              <Link to="/profile">{context.currentUser.name}</Link>
            </span>
            <Button onClick={onLogout} colorScheme={"blue"}>
              Wyloguj się
            </Button>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
};
