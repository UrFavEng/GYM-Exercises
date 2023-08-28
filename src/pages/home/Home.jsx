import "./home.css";
import HeroBanner from "../../components/heroBanner/HeroBanner";

import SearchBar from "../../components/searchBar/SearchBar";
import ScrollBar from "../../components/scrollBar/ScrollBar";
import { Outlet } from "react-router-dom";
import Exercises from "../exercises/Exercises";
const Home = ({ setCat, cat }) => {
  return (
    <div>
      <HeroBanner />
      <SearchBar />
      <ScrollBar setCat={setCat} />
      {cat == "all" ? <Exercises /> : <Outlet />}
    </div>
  );
};

export default Home;
