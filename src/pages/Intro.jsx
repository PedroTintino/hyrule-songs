import React, { useState } from "react";
import styles from "./Intro.module.css";
import Navbar from "../components/Navbar/Index";
import ClockIcon from "@mui/icons-material/PunchClock";
import { Link } from "react-router-dom";

const Intro = () => {
  const [activeSide, setActiveSide] = useState(null);

  const handleClick = (side) => {
    setActiveSide(side);
  };

  return (
    <>
      <div className={styles.page}>
        <div
          className={`${styles.side} ${styles.leftSide} ${
            activeSide === "left" ? styles.activeSide : ""
          } oot`}
          onMouseEnter={() => handleClick("left")}
          onMouseLeave={() => handleClick(null)}
        >
          <img
            src="../public/img/majoras.jpg"
            alt="A majora's mask background"
          />
          <div className={styles.backText}>
            <h4>Majora's Mask</h4>
            <Link to='/majoras'>
              <button>Discover</button>
            </Link>
          </div>
        </div>

        <div
          className={`${styles.side} ${
            activeSide === "right" ? styles.activeSide : ""
          }`}
          onMouseEnter={() => handleClick("right")}
          onMouseLeave={() => handleClick(null)}
        >
          <img
            src="../public/img/masksalesman.jpg"
            alt="A majora's mask background"
          />
          <div className={styles.backText}>
            <h4>Custom: Happy Mask Salesman</h4>
            <Link to='/masks'>
              <button>Discover</button>
            </Link>
          </div>
         
        </div>

        <div
          className={`${styles.side} ${
            activeSide === "right" ? styles.activeSide : ""
          } majoras`}
          onMouseEnter={() => handleClick("right")}
          onMouseLeave={() => handleClick(null)}
        >
          <img src="../public/img/oot.jpg" alt="A majora's mask background" />
          <div className={styles.backText}>
            <h4>Ocarina of Time</h4>
            <ClockIcon sx={{ fontSize: "1.5em" }} />
          </div>
        </div>

        <div
          className={`${styles.side} ${
            activeSide === "right" ? styles.activeSide : ""
          } majoras`}
          onMouseEnter={() => handleClick("right")}
          onMouseLeave={() => handleClick(null)}
        >
          <img
            src="../public/img/thewind.jpg"
            alt="A majora's mask background"
          />
          <div className={styles.backText}>
            <h4>The Wind Waker</h4>
            <ClockIcon sx={{ fontSize: "1.5em" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
