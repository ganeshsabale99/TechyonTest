// App.js
import React from "react";
import Header from "./components/Header/Header";
import ProjectOverview from "./components/ProjectOverview/ProjectOverview";
import TaskOverview from "./components/TaskOverview/TaskOverview";
import Sidebar from "./components/Sidebar/Sidebar";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="mainContent">
        <div className="content">
          <Header />
        </div>
        <div className="overviewContainer">
          <ProjectOverview />
          <TaskOverview />
        </div>
      </div>
    </div>
  );
}

export default App;
