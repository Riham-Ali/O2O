import React, { useState } from "react";
import Sidebar from "../../../sharedComponents/SidebarClub";
import Navbar from "../../../sharedComponents/Navbar";
import defultImag from "../../../assets/userImg.webp";
import DateTable from "./date";

import Team1 from "../../../assets/team1.png";
import Team2 from "../../../assets/team2.png";
import Team3 from "../../../assets/team3.webp";
import Team4 from "../../../assets/team4.png";
import Team5 from "../../../assets/team5.png";
import ClubImg from "../../../assets/userIcon.png";
import Chart from "react-apexcharts";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";

const clubDashboard = () => {
  const userName = "نادي حوسبة";
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "مجموع المباريات",
          " مجموع الأهداف ",
          "مجموع المخالفات",
          "الجوائز",
          "التقييم ",
        ],
      },
    },
    series: [
      {
        name: " 8-12 / إناث ",
        data: [5, 6, 4, 1, 49],
      },
      {
        name: " 8-15 / ذكور ",
        data: [12, 5, 0, 0, 35],
      },
      {
        name: " +15/ إناث ",
        data: [20, 8, 2, 2, 65],
      },
      {
        name: " +15/ ذكور ",
        data: [20, 3, 5, 0, 30],
      },
    ],
  });

  const userInfo = {
    userName: "محمد أحمد",
    userTeam: "حوسبة",
    userPosition: "مهاجم",
    userphoto: defultImag,
    userRole: "مدرب",
    userClub: "حوسبة",
    clubImg: ClubImg,
  };

  return (
    <>
      <div className="sidebar1">
        <Sidebar />
      </div>
      <div className="container">
        <header className="SectionsHeader">
          <Navbar userName={userName} />
        </header>
        <div className="SectionContainer">
          <div className="dashboardContainer">
            <div className="rightSideContainer">
              <div className="rightTopContainer">
                <div className="topRightContent">
                  <p className="tHeadB">الجوائز</p>
                </div>

                <div className="topRightContentM">
                  <p className="tHeadB"> فيديوهات المباريات </p>
                </div>

                <div className="topRightContent">
                  <p className="tHeadB"> أفضل اللاعبين </p>
                </div>

                <div className="topRightContent">
                  <p className="tHeadB">سجل المباريات </p>
                </div>

                <div className="topRightContentM">
                  <p className="tHeadB">المنافسات القادمة </p>
                </div>

                <div className="topRightContent">
                  <p className="tHeadB"> إحصائيات الشهر</p>
                </div>
              </div>

              <div className="rightMiddleContainer">
                <div className="boxTitle">الفرق</div>
                <div className="rightMiddleBox">
                  <div className="TeamNameContainer">
                    <img className="TeamImg" src={Team1}></img>
                    <NavLink to={"/teaminformations"}>
                      <div>فريق البالغين / ذكور </div>
                    </NavLink>
                  </div>
                </div>

                <div className="rightMiddleBox">
                  <div className="TeamNameContainer">
                    <img className="TeamImg" src={Team1}></img>
                    <div>فريق البالغين / اناث</div>
                  </div>
                </div>
                <div className="rightMiddleBox">
                  <div className="TeamNameContainer">
                    <img className="TeamImg" src={Team1}></img>
                    <div> فريق الناشئين / اناث</div>
                  </div>
                </div>
                <div className="rightMiddleBox">
                  <div className="TeamNameContainer">
                    <img className="TeamImg" src={Team1}></img>
                    <div>فريق الناشئين / ذكور</div>
                  </div>
                </div>
              </div>
              <div className="rightBottomContainer">
                <div className="row">
                  <div className="col-4">
                    <Chart
                      options={state.options}
                      series={state.series}
                      type="bar"
                      width="600"
                      height="190"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="leftSideContainer">
              <div className="leftTopContainer1">
                <div className="userInformation">
                  <img src={Team1}></img>
                  <div className="userdata">
                    <div>نادي الحوسبة</div>
                    <div className="moreUserInfo">
                      <span> للناشئين و المحترفين </span>
                    </div>
                  </div>
                </div>
                <div className="aboutUserContainer">
                  <div className="aboutUser">
                    عدد اللاعبين
                    <div className="aboutuserMore">320</div>
                  </div>
                  <div className="line"></div>
                  <div className="aboutUser1">
                    مجموع المباريات
                    <div className="aboutuserMore">80</div>
                  </div>
                </div>
              </div>
              <div className="leftMiddleContainer">
                <h3> مباريات جارية</h3>
                <p className="descriptionNow">لايوجد مباراة جارية الآن</p>
              </div>
              <div className="leftBottomContainer">
                <h3>أهم المواعيد</h3>
                <div className="dateTable">
                  <DateTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default clubDashboard;
