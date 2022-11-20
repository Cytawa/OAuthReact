import { GOOGLE_AUTH_URL } from "../../constants";

export const LoginPage = () => {
  const onLogin = () => {
    window.location.href = GOOGLE_AUTH_URL;
  };

  return (
    <div>
      <button onClick={onLogin}>Zaloguj się z Google</button>
    </div>
  );
};
