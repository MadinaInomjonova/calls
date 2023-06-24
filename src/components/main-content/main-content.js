import { Avatar, Container } from "@mui/material";
import { CallMade, CallReceived, FiberManualRecord } from "@mui/icons-material";
import "./main-content.css";

const MainContent = ({ calls }) => {
  function time_convert(num) {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    if (minutes.toString().length === 1) {
      return `${hours}:0${minutes}`;
    } else return `${hours}:${minutes}`;
  }

  const call_status = (reason) => {
    if (reason === "Вызов не получил ответа в течение времени ожидания") {
      return (
        <i className="call-status_blue">
          <CallMade />
        </i>
      );
    } else if (reason === "Вызов завершен вызывающим абонентом") {
      return (
        <i className="call-status_red">
          <CallReceived />
        </i>
      );
    } else
      return (
        <i>
          <CallMade className="call-status_green" />
        </i>
      );
  };

  const call_btn = (status) => {
    if (status === "671") {
      return (
        <>
          <i className="icon-great">
            <FiberManualRecord />
            <FiberManualRecord />
            <FiberManualRecord />
          </i>
          <button className="btn btn-great">Отлично</button>
        </>
      );
    }
    if (status === "105") {
      return (
        <>
          <i className="icon-fine">
            <FiberManualRecord />
            <FiberManualRecord />
          </i>
          <button className="btn btn-fine">Хорошо</button>
        </>
      );
    }
    if (status === "103") {
      return (
        <>
          <i className="icon-badly">
            <FiberManualRecord />
          </i>
          <button className="btn btn-badly">Плохо</button>
        </>
      );
    }
  };

  return (
    <Container>
      <div className="main-content">
        <table>
          <thead>
            <tr className="table-columns">
              <th>
                <input type="checkbox" />
              </th>
              <th>Тип</th>
              <th>Время</th>
              <th>Сотрудник</th>
              <th>Звонок</th>
              <th>Источник</th>
              <th>Оценка</th>
              <th>Длительность</th>
            </tr>
          </thead>

          <tbody>
            {calls.results?.map((call) => (
              <tr key={call.id} className="table-rows">
                <td>
                  <input type="checkbox" />
                </td>
                <td>{call_status(call.disconnect_reason)}</td>
                <td>{call.date.slice(10, 16)}</td>
                <td>
                  <Avatar src={call.person_avatar} />
                </td>
                <td>+7 (987) 345-17-12</td>
                <td>{call.source}</td>
                <td>{call_btn(call.to_extension)}</td>
                <td>{time_convert(call.time)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default MainContent;
