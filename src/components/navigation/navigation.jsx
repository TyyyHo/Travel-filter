import React, { useEffect, useState } from "react";
import "./navigation.scss";

const Navigation = ({
  asia,
  europe,
  americas,
  setAsia,
  setEurope,
  setAmericas,
}) => {
  const [all, setAll] = useState(false);

  useEffect(() => {
    if (asia === true && europe === true && americas === true) {
      setAll(true);
    } else {
      setAll(false);
    }
  });

  return (
    <div id="navigation">
      <h1>旅遊景點</h1>

      <div>
        <div className="option">
          <input
            type="checkbox"
            id="selectAll"
            checked={all}
            onChange={(e) => {
              setAsia(e.target.checked);
              setEurope(e.target.checked);
              setAmericas(e.target.checked);
            }}
          />
          <label htmlFor="selectAll">全選</label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            id="asia"
            checked={asia}
            onChange={(e) => {
              setAsia(e.target.checked);
            }}
          />
          <label htmlFor="asia">亞洲</label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            id="europe"
            checked={europe}
            onChange={(e) => {
              setEurope(e.target.checked);
            }}
          />
          <label htmlFor="europe">歐洲</label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            id="americas"
            checked={americas}
            onChange={(e) => {
              setAmericas(e.target.checked);
            }}
          />
          <label htmlFor="americas">美洲</label>
        </div>
      </div>
    </div>
  );
};

export { Navigation };
