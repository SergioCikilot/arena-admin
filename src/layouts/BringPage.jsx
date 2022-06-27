import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import Navi from "./Navi";
import { useNavigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import axios from "axios";
import { Login } from "../services/userService";
import UserService from "../services/userService";
import { Loader } from "semantic-ui-react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "universal-cookie";

export default function BringPage(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const service = new UserService();
  const cookies = new Cookies();

  useEffect(() => {
    var token = cookies.get("auth");
    if (token) {
      authenticateToken(token);
    } else {
      setIsLoading(false);
    }
  }, []);

  const authenticateToken = async (token) => {
    var resp = await service.getAllPitches(token);

    if (resp.status === 200) {
      setIsAuthenticated(true);
      navigate("/");
    }
    setIsLoading(false);
  };

  function handleLogin(e) {
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

    Login(e.target[0].value, e.target[1].value)
      .then(function (resp) {
        console.log(resp.headers);
        console.log(resp.headers["authorization"]);
        setIsAuthenticated(true);

        cookies.set("auth", resp.headers["authorization"]);

        navigate("/");
      })
      .catch(function (error) {
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
    cookies.remove("auth");
  }
  return (
    <div>
      {isLoading ? (
        <Loader size="huge" active>
          Yükleniyor
        </Loader>
      ) : (
        <div>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
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
      )}
    </div>
  );
}
