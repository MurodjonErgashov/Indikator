import React from "react";
// Distdagi filelar
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./dist/assets/libs/air-datepicker/css/datepicker.min.css";
import "./dist/assets/libs/jqvmap/jqvmap.min.css";
import "./dist/assets/css/bootstrap.min.css";
import "./dist/assets/css/icons.min.css";
import "./dist/assets/css/app.css";

import "./App.css";

import Header from "./Components/Header";
import VertikalMenu from "./Components/VertikalMenu";
import MainContent from "./Components/Dashboard/MainContent";

function App() {
  return (
    // <div data-topbar="colored">
    <div className="layout-wrapper">
      <Header />
      <VertikalMenu />
      <MainContent />
    </div>
    // </div>
  );
}

export default App;
