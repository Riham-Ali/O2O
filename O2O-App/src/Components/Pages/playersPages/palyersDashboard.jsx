import React, { useState } from "react";

import Sidebar from "../../../sharedComponents/Sidebar";
import Navbar from "../../../sharedComponents/Navbar";
import defultImag from "../../../assets/userImg.webp";
import DataTable from "../clubsPages/date";
import Team1 from "../../../assets/team1.png";
import Team2 from "../../../assets/team2.png";
import Chart from "react-apexcharts";
import Avatar from "@mui/material/Avatar";

const palyersDashboard = () => {
  const userName = "محمد";
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "السرعه",
          "الأهداف",
          "التمريرات",
          "%الأداء",
          "مجموع التقييمات",
        ],
      },
    },
    series: [
      {
        name: "المباراة الأخيرة",
        data: [30, 4, 1, 20, 10],
      },
      {
        name: "ماقبل الأخيرة",
        data: [60, 3, 5, 50, 20],
      },
    ],
  });

  const userInfo = {
    userName: "محمد أحمد",
    userTeam: "حوسبة",
    userPosition: "مهاجم",
    userphoto: defultImag,
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
                  <p className="tHeadB">المتابعين </p>
                </div>

                <div className="topRightContentM">
                  <p className="tHeadB"> الدعوات</p>
                </div>

                <div className="topRightContent">
                  <p className="tHeadB">مراسلة الأعضاء </p>
                </div>

                <div className="topRightContent">
                  <p className="tHeadB"> التقيمات</p>
                </div>

                <div className="topRightContentM">
                  <p className="tHeadB"> نتائج المباريات</p>
                </div>

                <div className="topRightContent">
                  <p className="tHeadB">سجل المباريات </p>
                </div>
              </div>

              <div className="rightMiddleContainer">
                <div className="boxTitle">ملخص الشهر</div>
                <div className="rightMiddleBox">
                  <div className="MidRightContainer">
                    <div className="midHead"> مجموع المباريات</div>
                    <div className="midBody">3</div>
                  </div>
                </div>
                <div className="rightMiddleBox">
                  <div className="MidRightContainer">
                    <div className="midHead">مجموع الأهداف</div>
                    <div className="midBody">2</div>
                  </div>
                </div>
                <div className="rightMiddleBox">
                  <div className="MidRightContainer">
                    <div className="midHead">كروت حمراء</div>
                    <div className="midBody">1</div>
                  </div>
                </div>
                <div className="rightMiddleBox">
                  <div className="MidRightContainer">
                    <div className="midHead">كروت صفراء</div>
                    <div className="midBody">0</div>
                  </div>
                </div>
                <div className="rightMiddleBox">
                  <div className="MidRightContainer">
                    <div className="midHead"> إحصائيات الشهر</div>
                    <div className="midBody">عرض</div>
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

            <div className="leftSideContainer1">
              <div className="leftTopContainer">
                <div className="userInformation">
                  <Avatar alt={userInfo.userName} src={userInfo.userphoto} />
                  <div className="userdata">
                    <div>{userInfo.userName}</div>
                    <div className="moreUserInfo">
                      {userInfo.userPosition} |{" "}
                      <span>فريق {userInfo.userTeam} </span>
                    </div>
                  </div>
                </div>
                <div className="aboutUserContainer">
                  <div className="aboutUser">
                    رقم اللاعب
                    <div className="aboutuserMore">7</div>
                  </div>
                  <div className="line"></div>
                  <div className="aboutUser1">
                    مجموع المباريات
                    <div className="aboutuserMore">5</div>
                  </div>
                </div>
              </div>
              <div className="leftMiddleContainer">
                <h3>مواعيد هامه</h3>
                <DataTable />
              </div>
              <div className="leftBottomContainer">
                <h3 className="leftBottomHead">المباراة القادمة</h3>
                <div className="nextMatch">
                  <div>
                    <img src={Team1}></img>
                  </div>
                  <h3>VS</h3>
                  <div>
                    <img src={Team2}></img>
                  </div>
                </div>
                <p className="nextMatchDescription">
                  الإنتقال الى صفحة الفريق المنافس
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default palyersDashboard;
