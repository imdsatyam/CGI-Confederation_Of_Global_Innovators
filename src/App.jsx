import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Chairman from "./Pages/Chairman";
import President from "./Pages/President";
import Director from "./Pages/Director";
import CouncilOfInnovators from "./Pages/CouncilOfInnovators";
import PartnerAndAssociates from "./Pages/PartnerAndAssociates";
import GlobalChapter from "./Pages/GlobalChapter";
import EconomicCouncil from "./Pages/EconomicCouncil";
import IprCouncil from "./Pages/IprCouncil";
import ComplianceCouncil from "./Pages/ComplianceCouncil";
import Error from "./Pages/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/"element={<Home />} />
        <Route path="/#about" element={<About />} />
        <Route path="/#chairman" element={<Chairman />} />
        <Route path="/#president" element={<President />} />
        <Route path="/#director" element={<Director />} />
        <Route path="/#council-of-innovators" element={<CouncilOfInnovators />} />
        <Route path="/#partner-and-associates" element={<PartnerAndAssociates />} />
        <Route path="/#global-chapter" element={<GlobalChapter />} />
        <Route path="/#economic-council" element={<EconomicCouncil />} />
        <Route path="/#ipr-council" element={<IprCouncil />} />
        <Route path="/#compliance-council" element={<ComplianceCouncil />} />
        <Route path="*"element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
