import { useState } from "react";

import {
  CallOutlined,
  DescriptionOutlined,
  DoneAllOutlined,
  GroupOutlined,
  MailOutlineOutlined,
  MenuBookOutlined,
  PersonOutlined,
  SettingsOutlined,
  ShowChartOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import "./sidebar.css";

const Sidebar = () => {
  const [menu, _] = useState([
    { id: 0, icon: <ShowChartOutlined />, name: "Итоги" },
    { id: 1, icon: <DoneAllOutlined />, name: "Заказы" },
    { id: 2, icon: <MailOutlineOutlined />, name: "Сообщения" },
    { id: 3, icon: <CallOutlined />, name: "Звонки", class: "active" },
    { id: 4, icon: <GroupOutlined />, name: "Контрагенты" },
    { id: 5, icon: <DescriptionOutlined />, name: "Документы" },
    { id: 6, icon: <PersonOutlined />, name: "Исполнители" },
    { id: 7, icon: <WorkOutlineOutlined />, name: "Отчеты" },
    { id: 8, icon: <MenuBookOutlined />, name: "База знаний" },
    { id: 9, icon: <SettingsOutlined />, name: "Настройки" },
  ]);

  return (
    <div className="sidebar">
      <h3 className="logo">Skilla IS</h3>

      <ul className="menu">
        {menu.map((item) => (
          <li key={item.id} className={`menu-item ${item.class}`}>
            <i>{item.icon}</i>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
