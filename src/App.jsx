import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { useState } from "react";
import CatExercises from "./pages/catExercises/CatExercises";
import ExercisesByID from "./pages/exercisesByID/ExercisesByID";
import SearchExercises from "./pages/searchExercises/SearchExercises";
function App() {
  const [cat, setCat] = useState("all");
  console.log(cat);
  return (
    <>
      <div className="container-app">
        <Navbar setCat={setCat} />
        <Routes>
          <Route path="/" element={<Home setCat={setCat} cat={cat} />}>
            <Route path="/cat/:cat" element={<CatExercises />} />
          </Route>
          <Route path="/exercise/:id" element={<ExercisesByID />} />
          <Route path="/exercise/search/:name" element={<SearchExercises />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
