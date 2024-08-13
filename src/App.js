import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskComponent from "./TaskComponent";
import DetailsComponent from "./DetailsComponent";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<TaskComponent />} />
        <Route path="/details/:nation" element={<DetailsComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
