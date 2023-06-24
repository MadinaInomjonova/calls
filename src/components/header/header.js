import { Avatar, Container } from "@mui/material";
import { ExpandMoreOutlined, SearchOutlined } from "@mui/icons-material";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <div className="header-flexBox">
          <p className="current-date">Среда, 13 окт</p>
          <ul className="list-items">
            <li className="list-item">
              <p>
                Новые звонки <span>20 из 30 шт</span>
              </p>
              <span></span>
            </li>
            <li className="list-item">
              <p>
                Качество разговоров <span>40%</span>
              </p>
              <span></span>
            </li>
            <li className="list-item">
              <p>
                Конверсия в заказ <span>67%</span>
              </p>
              <span></span>
            </li>
          </ul>
          <div className="user-info">
            <i>
              <SearchOutlined />
            </i>
            <p>
              ИП Сидорова Александра Михайловна <ExpandMoreOutlined />
            </p>
            <div className="user-avatar">
              <Avatar />
              <i>
                <ExpandMoreOutlined />
              </i>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
