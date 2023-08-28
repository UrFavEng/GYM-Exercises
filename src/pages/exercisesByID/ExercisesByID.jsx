import { useParams } from "react-router-dom";
import { useGetExerciseByIDQuery } from "../../store/apiSlice";
import bodyPart from "../../assets/icons/body-part.png";
import target from "../../assets/icons/target.png";
import equipment from "../../assets/icons/equipment.png";

import SearchBar from "../../components/searchBar/SearchBar";
import "./exercisesByID.css";
import Swiperr from "../../components/swiper/Swiperr";
import {
  useListByEquipmentQuery,
  useListByTargetMuscleQuery,
} from "../../store/apiSlice";
import Loading from "../../components/loading/Loading";
const ExercisesByID = () => {
  let { id } = useParams();
  console.log(id);
  const {
    data: dtails,
    isLoading: loaditem,
    isError,
  } = useGetExerciseByIDQuery(id);
  console.log(dtails);
  const { data: ListByTarget, isLoading } = useListByTargetMuscleQuery(
    dtails?.target
  );
  const { data: ListByEquipmentt, isLoading: loadeq } = useListByEquipmentQuery(
    dtails?.equipment
  );
  if (loaditem) {
    return <Loading />;
  }
  if (isError) {
    return "error";
  }
  // const exerciseDetails = [...data];
  // const itemDetails = {
  //   bodyPart: "waist",
  //   equipment: "body weight",
  //   gifUrl: "https://api.exercisedb.io/image/MWrgkcrpK2XxJv",
  //   id: "0001",
  //   name: "3/4 sit-up",
  //   target: "abs",
  // };

  if (isLoading) {
    return <Loading />;
  }
  if (loadeq) {
    return <Loading />;
  }
  const ListByTargett = [...ListByTarget].slice(0, 15);
  console.log(ListByTargett);

  const ListByEquipment = [...ListByEquipmentt].slice(15, 30);
  console.log(ListByEquipment);
  return (
    <div className="ExercisesByID" id="exercises">
      <SearchBar />
      <div className="ExercisesByID-details">
        <div className="image">
          <img src={dtails.gifUrl} />
        </div>
        <div className="ExercisesByID-details-text">
          <h1>{dtails.name}</h1>
          <p className="dec">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            necessitatibus fugit neque quia expedita voluptas perferendis
            explicabo veniam, ducimus sit.
          </p>
          <div className="bodyPart-equipment-target">
            <div className="bodyPart">
              <img src={bodyPart} />
              <p> {dtails.bodyPart}</p>
            </div>
            <div className="target">
              <img src={target} />
              <p> {dtails.target}</p>
            </div>
            <div className="equipment">
              <img src={equipment} />
              <p> {dtails.equipment}</p>
            </div>
          </div>
        </div>
      </div>
      {ListByTargett.length > 0 ? (
        <>
          <h1 className="target-muscle">
            Exercises That Target The Same Muscle Group
          </h1>
          <Swiperr ListByTarget={ListByTargett} />
        </>
      ) : (
        ""
      )}

      {ListByEquipment.length > 0 ? (
        <>
          <h1 className="target-muscle">
            Exercises That Use The Same Equipment
          </h1>
          <Swiperr ListByTarget={ListByEquipment} />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ExercisesByID;
