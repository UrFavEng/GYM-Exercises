import SearchBar from "../../components/searchBar/SearchBar";
import { useParams } from "react-router-dom";
import { useListByNameQuery } from "../../store/apiSlice";
import Loading from "../../components/loading/Loading";
import Exercise from "../../components/exercise/Exercise";

const SearchExercises = () => {
  let { name } = useParams();

  const { data, isLoading } = useListByNameQuery(name);
  if (isLoading) {
    return <Loading />;
  }
  const limitdata = [...data];
  const limitData = limitdata.slice(0, 10);

  return (
    <>
      <SearchBar />
      <div className="container-Exercises" id="exercises">
        <Exercise limitData={limitData} />
      </div>
    </>
  );
};

export default SearchExercises;
