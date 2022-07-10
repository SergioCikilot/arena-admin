import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import Navi from "./Navi";
import { useNavigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import axios from "axios";
import {
  Login,
  getAllPitches,
  getUserIdByUsername,
  getUserbyUsername,
} from "../services/userService";
import { Loader } from "semantic-ui-react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";

export default function BringPage(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [auth, setAuth] = useState("");

  useEffect(() => {
    var token = cookies.get("auth");
    if (token) {
      authenticateToken(token);
    } else {
      setIsLoading(false);
    }
  }, []);

  const authenticateToken = async (token) => {
    var resp = await getAllPitches(token);

    if (resp.status === 200) {
      setIsAuthenticated(true);
      navigate("/");
    }
    setIsLoading(false);
  };

  function handleLogin(e) {
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

    Login(e.target[0].value, e.target[1].value)
      .then(async function (resp) {
        var authorities = jwt_decode(resp.headers["authorization"])[
          "authorities"
        ];
        if (
          !authorities[authorities.length - 1]["authority"] === "ROLE_ADMIN"
        ) {
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
          return;
        }
        var userIdResp = await getUserIdByUsername(
          resp.headers["authorization"],
          e.target[0].value
        );
        if (userIdResp.status == 200) {
          cookies.set("userId", userIdResp.data);
        } else {
          toast.error("Bir şeyler yanlış gitti.", {
            position: "bottom-center",
          });
        }
        setAuth(resp.headers["authorization"]);
        setIsAuthenticated(true);
        if (isChecked) cookies.set("auth", resp.headers["authorization"]);

        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
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
              <LoginPage signIn={handleLogin} setIsChecked={setIsChecked} />
            </div>
          ) : (
            <>
              <Navi signOut={handleLogut} auth={auth} />
              <Dashboard />
            </>
          )}
        </div>
      )}
    </div>
  );
}
