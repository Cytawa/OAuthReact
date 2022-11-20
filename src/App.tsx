import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { StartPage } from "./components/StartPage/StartPage";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { RedirectHandler } from "./components/RedirectHandler";
import { Profile } from "./components/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<StartPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
        <Route path="/oauth2/redirect" element={<RedirectHandler />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
