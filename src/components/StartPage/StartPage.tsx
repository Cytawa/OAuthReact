import "./StartPage.css";
import ReactLogo from "../../img/logo192.png";

export const StartPage = () => {
  return (
    <div className="start-page-container">
      <img src={ReactLogo} alt="React logo" />
      <p>Witaj w tajnym systemie OAUTH2.2</p>
    </div>
  );
};
