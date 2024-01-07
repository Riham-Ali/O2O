import React from "react";
import "../Style/Style.css";
import { RxHome } from "react-icons/rx";
import O2OLogo from "../Assets/Logo4.png";
import { TbReportAnalytics } from "react-icons/tb";
import { MdOutlineDateRange } from "react-icons/md";
import { BsChatLeftText, BsPeopleFill } from "react-icons/bs";
import { AiOutlineUserAdd, AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";
import { NavLink } from "react-bootstrap";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
import PhotoCameraFrontOutlinedIcon from "@mui/icons-material/PhotoCameraFrontOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";

const Sidebar = () => {
  const SidebarItems = [
    //Home
    {
      text: " الرئيسية ",
      icon: <OtherHousesOutlinedIcon />,
      path: "/clubdashboard",
    },

    //Teams
    {
      text: " الفرق ",
      icon: <SwitchAccountOutlinedIcon />,
      path: "/teaminformations",
    },

    //Managers
    {
      text: " الإداريين ",
      icon: <FolderSharedOutlinedIcon />,
      path: "",
    },

    //
    {
      path: "",
      text: " المواعيد ",
      icon: <MdOutlineDateRange />,
    },

    //Report
    {
      text: " التقارير ",
      icon: <AssessmentOutlinedIcon />,
      path: "",
    },

    //Template
    {
      text: " الرسائل ",
      icon: <MailOutlineOutlinedIcon />,
      path: "",
    },

    //Manage Customer
    {
      text: "الدعوات  ",
      icon: <NoteAddOutlinedIcon />,
      path: "",
    },

    //Send Messages
    {
      text: " ملفي ",
      icon: <PhotoCameraFrontOutlinedIcon />,
      path: "/",
    },

    //setting
    {
      text: " الدعم ",
      icon: <LiveHelpOutlinedIcon />,
      path: "/",
    },
    //Logout
    {
      text: " خروج ",
      icon: <AiOutlineLogout />,
      path: "/login",
    },
  ];

  return (
    <div className="sidebarContainer">
      <div className="o2oLogo">
        <img src={O2OLogo} alt="" />
      </div>
      <div className="menuItems">
        {SidebarItems.map((item, index) => (
          <a href={item.path} className="sidebarItems" key={index}>
            {item.icon}
            <span>{item.text}</span>{" "}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
