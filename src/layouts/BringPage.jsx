import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import Navi from "./Navi";
import { useNavigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import axios from "axios";
import UserService from "../services/userService";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "universal-cookie";

export default function BringPage(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("logging this here");
  }, []);

  function handleLogin(e) {
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    var service = new UserService();

    service
      .Login(e.target[0].value, e.target[1].value)
      .then(function(resp) {
        console.log(resp.headers["Authorization"]);
        setIsAuthenticated(true);
        const cookies = new Cookies();

        cookies.set("auth", resp.headers["Authorization"]);

        navigate("/");
      })
      .catch(function(error) {
        // handle error
        toast.error("Kullanıcı Adı veya Şifre Hatalı", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setIsAuthenticated(false);
      });
  }
  function handleLogut() {
    setIsAuthenticated(false);
  }
  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ width: "400px" }}
      />

      {!isAuthenticated ? (
        <div>
          <LoginPage signIn={handleLogin} />
        </div>
      ) : (
        <>
          <Navi signOut={handleLogut} />
          <Dashboard />
        </>
      )}
    </div>
  );
}
