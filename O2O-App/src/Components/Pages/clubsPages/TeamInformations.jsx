import React from "react";
import SidebarClub from "../../../sharedComponents/SidebarClub";
import Navbar from "../../../sharedComponents/Navbar";
import divImg1 from "../../../assets/Sportsperson.png";
import divImg2 from "../../../assets/Wistle 2.png";
import divImg3 from "../../../assets/Stopwatch.png";
import divImg4 from "../../../assets/Trophy.png";
import PlayersDataTable from "./PlayersDataTable";
const TeamInformations = () => {
  const userName = "حوسبة";
  return (
    <>
      <div className="sidebar1">
        <SidebarClub />
      </div>
      <div className="container">
        <header className="SectionsHeader">
          <Navbar userName={userName} />
        </header>
        <div className="SectionContainer">
          <div className="teamInformationContainer">
            <div className="topTeamInformation">
              <div className="topTeamContainer">
                <div className="topTeamIcon">
                  <img src={divImg1} alt="" />
                </div>
                <div className="topTeamDescription">
                  <div>عدد اللاعبين</div>
                  <div>120</div>
                </div>
              </div>

              <div className="topTeamContainer">
                <div className="topTeamIcon2">
                  <img src={divImg2} alt="" />
                </div>
                <div className="topTeamDescription">
                  <div>مجموع المباريات </div>
                  <div>50</div>
                </div>
              </div>

              <div className="topTeamContainer">
                <div className="topTeamIcon3">
                  <img src={divImg3} alt="" />
                </div>
                <div className="topTeamDescription">
                  <div> ساعات التدريب </div>
                  <div>600</div>
                </div>
              </div>

              <div className="topTeamContainer">
                <div className="topTeamIcon4">
                  <img src={divImg4} alt="" />
                </div>
                <div className="topTeamDescription">
                  <div>مجموع الجوائز </div>
                  <div>3</div>
                </div>
              </div>
            </div>
            <div className="teamInformationTable">
              <PlayersDataTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamInformations;
