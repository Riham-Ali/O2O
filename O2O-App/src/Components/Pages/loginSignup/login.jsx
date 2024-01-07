import React, { useState } from "react";
import "../../../Style/Style.css";
import Loginback from "../../../assets/loginback.png";
import UpperImg from "../../../assets/loginimgh.png";
import MiddleImg from "../../../assets/loginimg.png";
import Sidebar from "../../../sharedComponents/Sidebar";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { FormHelperText, IconButton } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate, useLocation } from "react-router-dom";

const login = () => {
  //const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const PWD_REGEX =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [firstEmail, setFirstEmail] = useState(true);

  const [Email, setemail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);

  const handleChangeEmail = (event) => {
    const inputValue = event.target.value;
    setemail(inputValue);
    setErrorEmail(!emailRegex.test(inputValue));
    setFirstEmail(false);
  };

  const [firstPassword, setFirstPassword] = useState(true);

  const [Password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);

  const handleChangePassword = (event) => {
    const inputValue = event.target.value;
    setPassword(inputValue);
    setErrorPassword(!PWD_REGEX.test(inputValue));
    setFirstPassword(false);
  };

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  const myData = {
    Email,
    Password,
  };

  //check where we was befor login and go to same page afetr login
  const redirectPath = location.state?.path || "/";

  const handleLoginClick = () => {
    if (!errorEmail || !errorPassword) {
      axios
        .post("https://192.168.1.60:45455/api/UserManage/login", myData)
        .then((res) => {
          if (res.status) {
            alert(res.message);
            //dispatch(authAction.login({ phone: myData.phone, token: res.data.token }));
            console.log(res);
            navigate("/");
          } else {
            let errorMessage = "Connection Failed";
            if (res) {
              errorMessage = res;
            }
          }
        })
        .catch((error) => {
          console.log(error);
          alert("ادخل البيانات بشكل صحيح");
        });
    } else alert("الباسوورد او البريد الالكتروني خاطئ!");
  };

  return (
    <>
      <div className="loginContainer">
        <div className="imgSide">
          <div className="backimg">
            <img className="ImgBackgroundLogin" src={Loginback} alt="" />
          </div>
          <div className="upperimg">
            <img className="LoginUpper" src={UpperImg}></img>
          </div>

          <div className="Midimg">
            <img className="LoginMid" src={MiddleImg}></img>
          </div>
        </div>

        <div className="loginFormContainer">
          <p className="LoginHeader">تسجيل الدخول</p>
          <form className="LoginForm" action="">
            <div className="loginInput">
              <label>البريد الإلكتروني </label>
              <input
                fullWidth
                required
                autoComplete=""
                autoFocus
                margin="normal"
                variant="standard"
                size="large"
                value={Email}
                placeholder="البريد الاكتروني  "
                onChange={handleChangeEmail}
                InputProps={{
                  disableUnderline: true,
                }}
                type="Email"
              />
              {errorEmail && (
                <FormHelperText error>ادخلت ايميل بشكل خاطئ</FormHelperText>
              )}
            </div>

            <div className="loginInput">
              <p>
                <label>كلمة السر </label>

                <input
                  required
                  autoComplete=""
                  autoFocus
                  placeholder="الباسوورد"
                  margin="normal"
                  variant="standard"
                  size="large"
                  type={showPassword ? "text" : "Password"}
                  value={Password}
                  onChange={handleChangePassword}
                  InputProps={{
                    disableUnderline: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                    inputProps: {
                      onKeyDown: (event) => {
                        if (event.key === "." || event.key === "-") {
                          event.preventDefault();
                        }
                      },
                    },
                  }}
                />
                {errorPassword && (
                  <FormHelperText error>الباسوورد خاطئ</FormHelperText>
                )}
              </p>
            </div>

            <button
              className="loginInput"
              type="button"
              variant="outlined"
              size="large"
              onClick={handleLoginClick}
            >
              دخول
            </button>
          </form>
          <div className="otherOptions">
            <p className="loginOptions" id="op3">
              <span>دخول </span> من نفاذ
              <span className="Or">أو</span>
              <NavLink to={"/clubregister"}>
                <span>تسجيل الدخول </span>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
