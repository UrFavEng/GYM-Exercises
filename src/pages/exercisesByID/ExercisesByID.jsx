import { useParams } from "react-router-dom";
import { useGetExerciseByIDQuery } from "../../store/apiSlice";
import bodyPart from "../../assets/icons/body-part.png";
import target from "../../assets/icons/target.png";
import equipment from "../../assets/icons/equipment.png";
import demo from "../../assets/images/demo.gif";
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
  const {
    data: dtails,
    isLoading: loaditem,
    isError,
    error,
  } = useGetExerciseByIDQuery(id);
  console.log(dtails, error);
  const { data: ListByTarget, isLoading } = useListByTargetMuscleQuery(
    dtails?.target
  );
  const {
    data: ListByEquipmentt,
    isLoading: loadeq,
    error: erreq,
  } = useListByEquipmentQuery(dtails?.equipment);
  console.log(erreq);
  if (loaditem) {
    return <Loading />;
  }
  if (isError) {
    return "error";
  }

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
          <img src={demo} alt="image" />
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
          <h1 className="target-muscle px-3">
            Exercises That Target The Same Muscle Group
          </h1>
          <Swiperr ListByTarget={ListByTargett} />
        </>
      ) : (
        ""
      )}

      {ListByEquipment.length > 0 ? (
        <>
          <h1 className="target-muscle px-3">
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
