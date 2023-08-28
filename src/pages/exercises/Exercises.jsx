import { useState } from "react";
import { useAllExercisesQuery } from "../../store/apiSlice";
import "./exercises.css";
import Exercise from "../../components/exercise/Exercise";
import Loading from "../../components/loading/Loading";
const Exercises = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const { data, isLoading } = useAllExercisesQuery();
  if (isLoading) {
    return <Loading />;
  }
  const bodyParts = [...data];
  // const bodyParts = [
  //   {
  //     bodyPart: "waist",
  //     equipment: "body weight",
  //     gifUrl: "https://api.exercisedb.io/image/MWrgkcrpK2XxJv",
  //     id: "0001",
  //     name: "3/4 sit-up",
  //   },
  //   {
  //     bodyPart: "waist",
  //     equipment: "body weight",
  //     gifUrl: "https://api.exercisedb.io/image/MWrgkcrpK2XxJv",
  //     id: "0002",
  //     name: "3/4 sit-up",
  //   },
  //   {
  //     bodyPart: "waist",
  //     equipment: "body weight",
  //     gifUrl: "https://api.exercisedb.io/image/MWrgkcrpK2XxJv",
  //     id: "0003",
  //     name: "3/4 sit-up",
  //   },
  //   {
  //     bodyPart: "waist",
  //     equipment: "body weight",
  //     gifUrl: "https://api.exercisedb.io/image/MWrgkcrpK2XxJv",
  //     id: "0004",
  //     name: "3/4 sit-up",
  //   },
  //   {
  //     bodyPart: "waist",
  //     equipment: "body weight",
  //     gifUrl: "https://api.exercisedb.io/image/MWrgkcrpK2XxJv",
  //     id: "0005",
  //     name: "3/4 sit-up",
  //   },
  //   {
  //     bodyPart: "waist",
  //     equipment: "body weight",
  //     gifUrl: "https://api.exercisedb.io/image/MWrgkcrpK2XxJv",
  //     id: "0006",
  //     name: "3/4 sit-up",
  //   },
  //   {
  //     bodyPart: "waist",
  //     equipment: "body weight",
  //     gifUrl: "https://api.exercisedb.io/image/MWrgkcrpK2XxJv",
  //     id: "0007",
  //     name: "3/4 sit-up",
  //   },
  //   {
  //     bodyPart: "waist",
  //     equipment: "body weight",
  //     gifUrl: "https://api.exercisedb.io/image/MWrgkcrpK2XxJv",
  //     id: "0008",
  //     name: "3/4 sit-up",
  //   },
  //   {
  //     bodyPart: "waist",
  //     equipment: "body weight",
  //     gifUrl: "https://api.exercisedb.io/image/MWrgkcrpK2XxJv",
  //     id: "0009",
  //     name: "3/4 sit-up",
  //   },
  //   {
  //     bodyPart: "waist",
  //     equipment: "body weight",
  //     gifUrl: "https://api.exercisedb.io/image/MWrgkcrpK2XxJv",
  //     id: "0010",
  //     name: "3/4 sit-up",
  //   },
  // ];
  const limitData = bodyParts.slice(start, end);
  console.log(limitData);
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
};

export default Exercises;
