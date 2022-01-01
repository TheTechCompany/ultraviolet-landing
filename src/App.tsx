import React from "react";
import "./App.css";
import { Grommet } from "grommet";
import { Background } from "./components/background";
import UVLogo from "./components/UVLogo";
import CatalyticAlchemy from "./components/CatalyticAlchemy";

function App() {
  return (
    <Grommet plain>
      <UVLogo />
      <Background />
      <CatalyticAlchemy />
    </Grommet>
  );
}

export default App;
