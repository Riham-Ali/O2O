import React, { useState } from "react";

import { RiDeleteBinFill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import Button from "@mui/material/Button";
import { DateTimePickerToolbar } from "@mui/x-date-pickers";

const date = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: " تدريب",
      date: "20 / 11 / 2023",
      day: "الإثنين",
    },
    {
      id: 1,
      title: " تدريب",
      date: "30 / 11 / 2023",
      day: "الخميس",
    },
  ]);

  return (
    <div>
      <div className="table-container">
        <table className="Templatetable1">
          <thead className="customerHead">
            <tr>
              <th>العنوان</th>
              <th> اليوم</th>
              <th>التاريخ</th>
            </tr>
          </thead>
          <tbody className="customerBody">
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>

                <td className="dayItem">{item.day}</td>
                <td className="dateItem">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default date;
