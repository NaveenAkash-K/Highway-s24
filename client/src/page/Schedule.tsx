import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import style from "../styles/pages/schedule.module.css";

const Schedule: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Schedule | Highways";
  });

  const [selectedDay, setSelectedDay] = useState(1);

  const day1: {
    name: string;
    time: string;
  }[] = [
    { name: "INAUGURAL", time: "9.00 - 10.00 AM" },
    { name: "WALKIN", time: "9.00 - 10.00 AM" },
    { name: "DANCE", time: "9.00 - 10.00 AM" },
    { name: "MUSIC", time: "9.00 - 10.00 AM" },
    { name: "WALK IN", time: "9.00 - 10.00 AM" },
    { name: "", time: "" },
  ];

  const day2: {
    name: string;
    time: string;
  }[] = [
    { name: "INAUGURAL", time: "9.00 - 10.00 AM" },
    { name: "WALKIN", time: "9.00 - 10.00 AM" },
    { name: "DANCE", time: "9.00 - 10.00 AM" },
    { name: "MUSIC", time: "9.00 - 10.00 AM" },
    { name: "WALK IN", time: "9.00 - 10.00 AM" },
    { name: "", time: "" },
  ];

  return (
    <>
      <Header />
      <div className={style.container}>
        <h1 className={style.heading}>Schedule</h1>
        <center>
          <div className={style.toggle}>
            <div
              className={style.day}
              onClick={() => {
                setSelectedDay(1);
              }}
            >
              Day 1
            </div>
            <div
              className={style.day}
              onClick={() => {
                setSelectedDay(2);
              }}
            >
              Day 2
            </div>
            <div
              className={style.toggle_overlay}
              style={{
                transform:
                  selectedDay === 1 ? "translateX(0)" : "translateX(105%)",
              }}
            ></div>
          </div>
        </center>
        {selectedDay === 1 ? (
          <div className={style.details}>
            {day1.map((item, index) => (
              <div className={style.edu} key={index}>
                <div className={style.align}>
                  <p>{item.time}</p>
                  <p>{item.name}</p>
                  {index !== day1.length - 1 && (
                    <div className={style.line}></div>
                  )}
                </div>
                {index !== day1.length - 1 && <div className={style.dot}></div>}
              </div>
            ))}
          </div>
        ) : (
          <div className={style.details}>
            {day2.map((item, index) => (
              <div className={style.edu} key={index}>
                <div className={style.align}>
                  <p>{item.time}</p>
                  <p>{item.name}</p>
                  {index !== day2.length - 1 && (
                    <div className={style.line}></div>
                  )}
                </div>
                {index !== day2.length - 1 && <div className={style.dot}></div>}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Schedule;
