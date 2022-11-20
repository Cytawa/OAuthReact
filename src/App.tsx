import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { StartPage } from "./components/StartPage/StartPage";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { RedirectHandler } from "./components/RedirectHandler";
import { Profile } from "./components/Profile/Profile";
import { AppContextProvider } from "./context/AppContext";
import { AdminPanel } from "./components/AdminPanel";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <AppContextProvider>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Wrapper />}>
              <Route index element={<StartPage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
            </Route>
            <Route
              path="/adminpanel"
              element={
                <ProtectedRoute>
                  <AdminPanel />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/oauth2/redirect"
              element={<RedirectHandler />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </AppContextProvider>
  );
}

export default App;
