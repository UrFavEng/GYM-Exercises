import { useNavigate } from "react-router-dom";
import "./exercise.css";
// eslint-disable-next-line react/prop-types
const Exercise = ({ limitData }) => {
  const rout = useNavigate();

  return (
    <>
      {limitData.map((item) => (
        <div
          key={item.id}
          className="container-Exercise bg-white m-2"
          onClick={() => rout(`/exercise/${item.id}`)}
        >
          <img src={item.gifUrl} alt="" />
          <div className="btnss">
            <button>{item.bodyPart}</button>
            <button>{item.target}</button>
          </div>
          <p>{item.name}</p>
        </div>
      ))}
    </>
  );
};

export default Exercise;
