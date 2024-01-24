// import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import MainLayout from "./Layouts/MainLayout";
import Login from "./Components/Login";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
        {isAuthenticated ? (
          <MainLayout />
        ) : (
          <Login />
        )}
    </div>
  );
}

export default App;

