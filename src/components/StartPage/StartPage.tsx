import "./StartPage.css";
import ReactLogo from "../../img/logo192.png";
import useAppContext from "../../hooks/useAppContext";

export const StartPage = () => {
  const context = useAppContext();

  return (
    <div className="start-page-container">
      <img src={ReactLogo} alt="React logo" />
      <p>Witaj w tajnym systemie OAUTH2.2</p>
      {!context.currentUser && <h5>Aby uzyskać dostęp zaloguj się</h5>}
    </div>
  );
};
