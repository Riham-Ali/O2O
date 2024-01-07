import React, { useState } from "react";
import RegisterImg from "../../../assets/register1.png";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

import { InputAdornment, IconButton, FormHelperText } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const signupClubs = () => {
  const navigate = useNavigate();

  const PWD_REGEX =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //firstname
  const [firstName, setFirstName] = useState(true);

  const [Name, setName] = useState("");
  const [errorName, setErrorName] = useState(false);

  const handleChangeName = (event) => {
    const inputValue = event.target.value;
    setName(inputValue);
    setErrorName(inputValue === "");
    setFirstName(false);
  };

  //phonenumber
  const [firstPhone, setFirstPhone] = useState(true);

  const [PhoneNumber, setphone] = useState("");
  const [errorPhone, setErrorPhone] = useState(false);

  const handleChangePhone = (event) => {
    const inputValue = event.target.value;
    setphone(inputValue);
    setErrorPhone(
      inputValue === "" ||
        isNaN(inputValue) ||
        inputValue.length < 10 ||
        inputValue.length > 10
    );
    setFirstPhone(false);
  };

  //number of players
  const [firstNumberOfPlayers, setFirstNumberOfPlayers] = useState(true);

  const [NumberOfPlayers, setNumberOfPlayers] = useState("");
  const [errorNumberOfPlayers, setErrorNumberOfPlayers] = useState(false);

  const handleChangeNumberOfPlayers = (event) => {
    const inputValue = event.target.value;
    setNumberOfPlayers(inputValue);
    setErrorNumberOfPlayers(inputValue === "");
    setFirstNumberOfPlayers(false);
  };

  //location
  const [firstLocation, setFirstLocation] = useState(true);

  const [Location, setLocation] = useState("");
  const [errorLocation, setErrorLocation] = useState(false);

  const handleChangeLocation = (event) => {
    const inputValue = event.target.value;
    setLocation(inputValue);
    setErrorLocation(inputValue === "");
    setFirstLocation(false);
  };

  //email

  const [firstEmail, setFirstEmail] = useState(true);

  const [Email, setemail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);

  const handleChangeEmail = (event) => {
    const inputValue = event.target.value;
    setemail(inputValue);
    setErrorEmail(!emailRegex.test(inputValue));
    setFirstEmail(false);
  };

  //password
  const [firstPassword, setFirstPassword] = useState(true);

  const [Password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);

  const handleChangePassword = (event) => {
    const inputValue = event.target.value;
    // console.log(inputValue);
    setPassword(inputValue);
    // console.log(PWD_REGEX.test(inputValue));
    setErrorPassword(!PWD_REGEX.test(inputValue));
    // debugger;
    setFirstPassword(false);
  };

  const myData = {
    Name,
    Location,
    NumberOfPlayers,
    BestPlayer: "ahmad",
    ClubsID: 1,
    FixtureID: 1,
    WorstPlayer: "sara",
    Email,
    Password,
    PhoneNumber,
  };

  const handleRegisterClick = () => {
    if (
      !errorPhone ||
      !errorPassword ||
      !errorName ||
      !errorGender ||
      !errorAge ||
      !errorEmail
    ) {
      console.log(myData);
      // console.log(password);
      axios
        .post("https://192.168.1.60:45455/api/UserManage/teamregister", myData)
        .then((res) => {
          if (res.status) {
            alert(res);
            console.log(res);
            navigate("/", { state: { phone: myData.phone } });
          } else {
            let errorMessage = "Connection Failed";
            if (res.message) {
              errorMessage = res.message;
            }
            alert(errorMessage);
            throw new Error(errorMessage);
          }
        })
        .catch((error) => {
          console.log(error);
          alert("حدث خطأ اثناء الاتصال.");
        });
    } else alert("الرجاء ادخال جميع المعلومات بشكل صحيح ");
  };

  return (
    <div className="ClubRegisterContainer">
      <div className="backContainer">
        <div
          className="Frame1"
          style={{
            width: 900,
            height: 500,
            position: "relative",
            background: "white",
            borderRadius: 50,
            overflow: "hidden",
          }}
        >
          <div
            className="Ellipse4"
            style={{
              width: 600,
              height: 600,
              left: 550,
              top: -30,
              position: "absolute",
              opacity: 0.25,
              background: "#97FEED",
              borderRadius: 9999,
            }}
          />
          <div
            className="Ellipse5"
            style={{
              width: 600,
              height: 600,
              left: 650,
              top: -30,
              position: "absolute",
              opacity: 0.5,
              background: "#35A29F",
              borderRadius: 9999,
            }}
          />
          <div
            className="Ellipse6"
            style={{
              width: 600,
              height: 600,
              left: 750,
              top: -22,
              position: "absolute",
              background: "#0B666A",
              borderRadius: 9999,
            }}
          />
        </div>
      </div>
      <div className="containerRegister">
        <div className="formGrid">
          <div className="formImg">
            <img src={RegisterImg} className="img-fluid" />
          </div>

          <div className="Form-Container">
            <p className="FormHeader">تسجيل نادي</p>
            <form action="">
              <p>
                <label for=""> إسم النادي </label>

                <input
                  fullWidth
                  required
                  autoComplete=""
                  autoFocus
                  value={Name}
                  onChange={handleChangeName}
                  placeholder="الاسم "
                  margin="normal"
                  size="large"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  type="text"
                />
                {errorName && (
                  <FormHelperText error>هذا الاسم غير صالح</FormHelperText>
                )}
              </p>

              <p>
                <label for="">عدد الاعبين </label>
                <input
                  fullWidth
                  required
                  autoComplete=""
                  autoFocus
                  value={NumberOfPlayers}
                  onChange={handleChangeNumberOfPlayers}
                  placeholder="عدد الاعبين"
                  margin="normal"
                  size="large"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  type="text"
                />
              </p>
              <p>
                <label for="">البريد الالكتروني</label>
                <input
                  fullWidth
                  required
                  autoComplete=""
                  autoFocus
                  margin="normal"
                  variant="standard"
                  size="large"
                  value={Email}
                  placeholder="البريد الاكتروني "
                  onChange={handleChangeEmail}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  type="text"
                />
                {errorEmail && (
                  <FormHelperText error>ادخلت ايميل بشكل خاطئ</FormHelperText>
                )}
              </p>

              <p>
                <label for="">رقم الهاتف</label>
                <input
                  fullWidth
                  required
                  autoComplete=""
                  autoFocus
                  margin="normal"
                  variant="standard"
                  size="large"
                  value={PhoneNumber}
                  placeholder=" رقم الهاتف "
                  onChange={handleChangePhone}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  type="text"
                />
                <div className="ErrorMessage">
                  {errorPhone && (
                    <FormHelperText error>
                      الرقم الذي ادخلته غير صحيح
                    </FormHelperText>
                  )}
                </div>
              </p>

              <p>
                <label for="">الرقم السري</label>
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
                          {showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
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
              <p>
                <label for="">المدينة</label>
                <input
                  fullWidth
                  required
                  autoComplete=""
                  autoFocus
                  margin="normal"
                  variant="standard"
                  size="large"
                  value={Location}
                  placeholder=" المدينة  "
                  onChange={handleChangeLocation}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  type="text"
                />
                {errorLocation && (
                  <FormHelperText error>العنوان مطلوب</FormHelperText>
                )}
              </p>

              <p class="full-width">
                <NavLink to={"/clubdashboard"}>
                  <button
                    variant="outlined"
                    size="large"
                    onClick={handleRegisterClick}
                  >
                    التالي
                  </button>
                </NavLink>
              </p>
            </form>
            <div className="signup">
              <p className="loginOptions" id="op1">
                تمتلك حساب؟
                <NavLink to={"/login"}>
                  <span>دخول </span>
                </NavLink>
                الآن
              </p>
              <p className="loginOptions" id="op2">
                <NavLink to={"/"}>
                  <span className="loginOptionsSpan">تسجيل </span> لاعب جديد
                </NavLink>
              </p>

              <p className="loginOptions" id="op3">
                <span>دخول </span> من نفاذ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signupClubs;
