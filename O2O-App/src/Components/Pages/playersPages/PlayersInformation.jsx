import React from "react";
import Sidebar from "../../../sharedComponents/Sidebar";
import Navbar from "../../../sharedComponents/Navbar";
import Avatar from "@mui/material/Avatar";
import defultImag from "../../../assets/userImg.webp";
import ReactApexChart from "react-apexcharts";
import ProgressBar from "./ProgressBar";
const PlayersInformation = () => {
  const userName = "حوسبة";

  const userInfo = {
    userName: "محمد أحمد",
    userTeam: "حوسبة",
    userPosition: "مهاجم",
    userphoto: defultImag,
  };

  const series = [
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: "Series 2",
      data: [20, 30, 40, 80, 20, 80],
    },
  ];

  const options = {
    chart: {
      height: 150,
      type: "radar",
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
    },
    title: {
      text: "",
    },
    stroke: {
      width: 1,
    },
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ["PASSES", "Crosses", "Saves", "OUTS", "Corner", "SHOTS"],
    },
  };

  const series2 = [29];

  const options2 = {
    chart: {
      height: 350,
      type: "radialBar",
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "70%",
          background: "#fff",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: "#fff",
          strokeWidth: "67%",
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: "#888",
            fontSize: "17px",
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            color: "#111",
            fontSize: "36px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#ABE5A1"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["السرعه Kh/h"],
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
          <div className="PlayerInformationsContainer">
            <div className="rightSideContainerInformations">
              <div className="midleInformationsContainer">
                <div className="graid222">
                  <div className="graid1in2">
                    <h3>إحصائيات التمرير</h3>
                    <div id="chart" className="chart">
                      <ReactApexChart
                        options={options}
                        series={series}
                        type="radar"
                        height={350}
                      />
                    </div>
                  </div>
                  <div className="graid2in2">
                    <div className="AnalysisContainer">
                      <ReactApexChart
                        options={options2}
                        series={series2}
                        type="radialBar"
                        height={250}
                      />
                    </div>

                    <div className="AnalysisContainer2">
                      <div className="ProgressBarPlayer">
                        <span className="progresslable">الأهداف:</span>

                        <ProgressBar bgcolor="#7DCE94" completed={80} />
                      </div>

                      <div className="ProgressBarPlayer1">
                        <span className="progresslable">إصابة الهدف:</span>

                        <ProgressBar bgcolor="#7DCE94" completed={60} />
                      </div>

                      <div className="ProgressBarPlayer1">
                        <span className="progresslable">رميات زاوية:</span>

                        <ProgressBar bgcolor="#7DCE94" completed={20} />
                      </div>
                      <div className="ProgressBarPlayer1">
                        <span className="progresslable">إستبعاد:</span>

                        <ProgressBar bgcolor="#7DCE94" completed={8} />
                      </div>

                      <div className="ProgressBarPlayer1">
                        <span className="progresslable">مخالفات:</span>

                        <ProgressBar bgcolor="#7DCE94" completed={5} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="leftSideContainerInformations">
              <div className="topInformationsContainer">
                <h3>معلومات اللاعب</h3>
                <div className="gridPersonalInformations">
                  <div className="pInformation">
                    <Avatar alt={userInfo.userName} src={userInfo.userphoto} />
                    <div className="userName1">{userInfo.userName}</div>
                  </div>

                  <div className="PlayerDescription">
                    <div className="divDescription">
                      من صناع اللعب المحترفين، أفضل خامس مهاجم في منطقة جدة
                      بمعدل 10 أهداف في 4 مباريات
                    </div>
                    <div className="div">
                      <div className="detailsContainer">
                        <div className="detailsContainerRight">
                          <div className="details">
                            <div>
                              {" "}
                              العمر: <span>23</span>
                            </div>
                          </div>

                          <div className="details">
                            <div>
                              {" "}
                              الطول: <span>185</span>
                            </div>
                          </div>

                          <div className="details">
                            <div>
                              {" "}
                              الوزن : <span>75</span>
                            </div>
                          </div>
                        </div>
                        <div className="detailsContainerleft">
                          <div className="details">
                            <div>
                              {" "}
                              قدم اللعب: <span>اليمين</span>
                            </div>
                          </div>

                          <div className="details">
                            <div>
                              {" "}
                              مجموع دقائق اللعب: <span>1050</span>
                            </div>
                          </div>

                          <div className="details">
                            <div>
                              {" "}
                              تاريخ إنتهاء العقد: <span>2024/12</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lastMatchInformation">
                <h3>تفاصيل أخر مباراة</h3>
                <div className="lastMatchDetails"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayersInformation;
