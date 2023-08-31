import React from "react";
import Character from "../Character/Character";
import Location from "../Location/Location";
import Episode from "../Episode/Episode";
import { Route, Routes } from "react-router-dom";

function RourerComponent() {
  return (
    <Routes>
      <Route index path="/" element={<Character />} />
      <Route path="/location" element={<Location />} />
      <Route path="/episode" element={<Episode />} />
    </Routes>
  );
}

export default RourerComponent;
