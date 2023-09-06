import React, { useState } from "react";
import { useGetExercisesByCatQuery } from "../../store/apiSlice";
import { useParams } from "react-router-dom";
import Exercises from "../exercises/Exercises";
import Exercise from "../../components/exercise/Exercise";
import Loading from "../../components/loading/Loading";

const CatExercises = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const handelNext = () => {
    if (end < 100) {
      setStart(start + 10);
      setEnd(end + 10);
    }
  };
  const handelPrevious = () => {
    if (start > 0) {
      setStart(start - 10);
      setEnd(end - 10);
    }
  };

  let { cat } = useParams();
  const { data, isLoading } = useGetExercisesByCatQuery(cat);
  if (isLoading) {
    return <Loading />;
  }
  if (cat !== "neck") {
    const bodyParts = [...data];

    const limitData = bodyParts.slice(start, end);
    console.log(limitData);
    return (
      <>
        <div className="container-Exercises" id="exercises">
          <Exercise limitData={limitData} />
        </div>
        <div className="pagenations-butns">
          <button onClick={handelPrevious}>Previous</button>
          <button onClick={handelNext}>Next</button>
        </div>
      </>
    );
  } else {
    const bodyParts = [...data];
    console.log(bodyParts);
    return (
      <div className="container-Exercises" id="exercises">
        <Exercise limitData={bodyParts} />
      </div>
    );
  }
};

export default CatExercises;
