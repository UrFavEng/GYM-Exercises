import { useNavigate } from "react-router-dom";
import "./searchBar.css";
const SearchBar = () => {
  const rout = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    const nameExercise = document.querySelector(`#site-search`);
    if (nameExercise?.value !== "") {
      rout(`/exercise/search/${nameExercise?.value}`);
      nameExercise.value = "";
    }
  };
  return (
    <div className="SearchBar">
      <h1>
        Awesome Exercises You
        <br />
        Should Know
      </h1>
      <form onSubmit={handelSubmit}>
        <input type="text" placeholder="Search Exercises" id="site-search" />
        <input type="button" value={"Search"} onClick={handelSubmit} />
      </form>
    </div>
  );
};

export default SearchBar;
