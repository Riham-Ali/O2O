import React, { useState } from "react";
import RegisterImgPlayer from "../../../assets/player.png";
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

const signupPlayers = () => {
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

  const [FirstName, setName] = useState("");
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

  //lastname
  const [firstLasttname, setFirstLasttName] = useState(true);

  const [LasttName, setLasttName] = useState("");
  const [errorLastName, setErrorLasttName] = useState(false);

  const handleChangeLastName = (event) => {
    const inputValue = event.target.value;
    setLasttName(inputValue);
    setErrorLasttName(inputValue === "");
    setFirstLasttName(false);
  };

  //age
  const [firstAge, setFirstAge] = useState(true);

  const [Age, setAge] = useState("");
  const [errorAge, setErrorAge] = useState(false);

  const handleChangeAge = (event) => {
    const inputValue = event.target.value;
    setAge(inputValue);
    setErrorAge(inputValue === "");
    setFirstAge(false);
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

  //gender
  const [firstGender, setFirstGender] = useState(true);
  const [Gender, setGender] = useState("");
  const [errorGender, setErrorGender] = useState(false);

  const handleChangeGender = (event) => {
    const inputValue = event.target.value;
    setGender(inputValue);
    setErrorGender(inputValue === "");
    setFirstGender(false);
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
    FirstName,
    LasttName,
    Age,
    Location,
    Gender,
    Email,
    Password,
    PhoneNumber,
    Followers: "null",
    Following: "null",
    PositionID: 1,
    TeamsID: 1,
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
        .post(
          "https://192.168.1.60:45455/api/UserManage/playerregister",
          myData
        )
        .then((res) => {
          if (res.status) {
            alert(res.data.message);
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
          alert("حدث خطأ اثناء الاتصال..");
        });
    } else alert("الرجاء ادخال جميع المعلومات بشكل صحيح");
  };

  return (
    <div className="ClubRegisterContainer">
      <div className="backContainer">
        <div
          className="Frame1"
          style={{
            width: 1000,
            height: 600,
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
            <img src={RegisterImgPlayer} className="img-fluid-player" />
          </div>

          <div className="Form-Container">
            <div className="plyerForm">
              <p className="FormHeaderPlayer">تسجيل لاعب</p>
              <form action="">
                <p>
                  <label for="">الإسم الأول</label>
                  <input
                    fullWidth
                    required
                    autoComplete=""
                    autoFocus
                    value={FirstName}
                    onChange={handleChangeName}
                    placeholder="الاسم الاول"
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
                  <label for="">إسم العائلة</label>
                  <input
                    fullWidth
                    required
                    autoComplete=""
                    autoFocus
                    value={LasttName}
                    onChange={handleChangeLastName}
                    placeholder="الاسم العائلة"
                    margin="normal"
                    size="large"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    type="text"
                  />
                  {errorLastName && (
                    <FormHelperText error>هذا الاسم غير صالح</FormHelperText>
                  )}
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
                    type="email"
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
                    type="number"
                  />
                  {errorPhone && (
                    <FormHelperText error>
                      الرقم الذي ادخلته غير صحيح
                    </FormHelperText>
                  )}
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

                <p>
                  <label for="">العمر</label>
                  <input
                    fullWidth
                    required
                    autoComplete=""
                    autoFocus
                    margin="normal"
                    variant="standard"
                    size="large"
                    value={Age}
                    placeholder=" العمر  "
                    onChange={handleChangeAge}
                    InputProps={{
                      disableUnderline: true,
                    }}
                    type="text"
                  />
                  {errorAge && (
                    <FormHelperText error>العمر مطلوب</FormHelperText>
                  )}
                </p>

                <p>
                  <label for="">ذكر\أنثى</label>
                  <input
                    fullWidth
                    required
                    autoComplete=""
                    autoFocus
                    margin="normal"
                    variant="standard"
                    size="large"
                    value={Gender}
                    placeholder=" ذكر\أنثى  "
                    onChange={handleChangeGender}
                    InputProps={{
                      disableUnderline: true,
                    }}
                    type="text"
                  />

                  {errorAge && (
                    <FormHelperText error>الجنس مطلوب</FormHelperText>
                  )}
                </p>

                <p class="full-width">
                  <NavLink to={"/playerdashboard"}>
                    <button
                      type="button"
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
                  تمتلك حساب؟{" "}
                  <NavLink to={"/login"}>
                    <span>دخول </span>
                  </NavLink>{" "}
                  الآن
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signupPlayers;
