import { Container } from "@mui/material";
import "./navbar.css";
import {
  AddOutlined,
  CalendarTodayOutlined,
  ChevronLeftOutlined,
  ChevronRightOutlined,
  ExpandMoreOutlined,
  SearchOutlined,
} from "@mui/icons-material";

const Navbar = () => {
  return (
    <Container className="navbar">
      <div className="navbar-top">
        <button>
          Баланс: <span>272 ₽</span> <AddOutlined />{" "}
        </button>
        <div className="calendar">
          <ChevronLeftOutlined />
          <p>
            <CalendarTodayOutlined /> 3 дня
          </p>
          <ChevronRightOutlined />
        </div>
      </div>

      <div className="navbar-bottom">
        <div className="search-calls">
          <SearchOutlined />
          Поиск по звонкам
        </div>
        <ul className="list-items">
          <li className="list-item">
            Все типы
            <ExpandMoreOutlined />
          </li>
          <li className="list-item">
            Все сотрудники
            <ExpandMoreOutlined />
          </li>
          <li className="list-item">
            Все звонки
            <ExpandMoreOutlined />
          </li>
          <li className="list-item">
            Все источники
            <ExpandMoreOutlined />
          </li>
          <li className="list-item">
            Все оценки
            <ExpandMoreOutlined />
          </li>
          <li className="list-item">
            Все ошибки
            <ExpandMoreOutlined />
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Navbar;
