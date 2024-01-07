import React, { useState } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";
const PlayersDataTable = () => {
  const [data, setData] = useState([
    {
      id: "1",
      fullName: "محمد أحمد",
      position: " مهاجم",
      age: "23",
      gender: "ذكر",
      totalMatch: "11",
      foot: "اليمين",
      hight: "185",
      widght: "75",
      startDate: "2020 / 05",
      endDate: "2024 / 12",
    },
    {
      id: "2",
      fullName: "عبد الله محمد",
      position: "حارس مرمى",
      age: "22",
      gender: "ذكر",
      totalMatch: "10",
      foot: "اليمين",
      hight: "180",
      widght: "80",
      startDate: "2019 / 01",
      endDate: "2025 / 12",
    },
    {
      id: "3",
      fullName: "فهد علي",
      position: "مدافع",
      age: "25",
      gender: "ذكر",
      totalMatch: "15",
      foot: "اليسار",
      hight: "190",
      widght: "85",
      startDate: "2018 / 06",
      endDate: "2024 / 11",
    },
    {
      id: "4",
      fullName: "محمد علي",
      position: "وسط",
      age: "23",
      gender: "ذكر",
      totalMatch: "8",
      foot: "اليمين",
      hight: "175",
      widght: "70",
      startDate: "2021 / 01",
      endDate: "2027 / 12",
    },
    {
      id: "5",
      fullName: "علي حسن",
      position: "مدافع",
      age: "26",
      gender: "ذكر",
      totalMatch: "12",
      foot: "اليسار",
      hight: "185",
      widght: "75",
      startDate: "2020 / 07",
      endDate: "2026 / 06",
    },
    {
      id: "6",
      fullName: "حسن محمد",
      position: "مهاجم",
      age: "24",
      gender: "ذكر",
      totalMatch: "10",
      foot: "اليمين",
      hight: "180",
      widght: "72",
      startDate: "2019 / 02",
      endDate: "2025 / 01",
    },
  ]);

  const [searchTerm, setSearchTerm] = React.useState("");

  const handleEdit = (id) => {
    console.log("Edit item at id ${id}");
  };

  const handeleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <div className="playerDiv">
      <div className="PlayerTableHeader">
        <h3>فريق حوسبة للبالغين</h3>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="البحث عن لاعب"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="table-container">
        <table className="Playertable1">
          <thead className="playerHead">
            <tr>
              <th>الرقم</th>
              <th>إسم اللاعب</th>
              <th>المركز الكروي</th>
              <th>العمر</th>
              <th>الجنس</th>
              <th>لعب مباراة</th>
              <th>القدم </th>
              <th>الطول </th>
              <th>الوزن </th>
              <th>بداية العقد </th>
              <th>نهاية العقد </th>
              <th> ملف اللاعب</th>
            </tr>
          </thead>
          <tbody className="playerBody">
            {data
              .filter(
                (item) =>
                  item.fullName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  item.position
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  item.age.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  item.foot.toLowerCase().includes(searchTerm.toLowerCase())
              )

              .map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.fullName}</td>
                  <td>{item.position}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                  <td>{item.totalMatch}</td>
                  <td>{item.foot}</td>
                  <td>{item.hight}</td>
                  <td>{item.widght}</td>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                  <td>
                    <NavLink to={"/playerinformations"}>
                      <button className="visitButton">
                        <PersonIcon />
                      </button>
                    </NavLink>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayersDataTable;
