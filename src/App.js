import React, { useState } from "react";
import { Navigation } from "./components/navigation/navigation.jsx";
import { Spot } from "./components/spot/spot.jsx";
// import bg from "./image/bg.jpg"

const App = () => {
  const [asia, setAsia] = useState(false);
  const [europe, setEurope] = useState(false);
  const [americas, setAmericas] = useState(false);
  return (
    <div id="app">
      <Navigation asia={asia} europe={europe} americas={americas} setAsia={setAsia} setEurope={setEurope} setAmericas={setAmericas} />
      <Spot asia={asia} europe={europe} americas={americas} />
    </div>
  );
};

export { App };
