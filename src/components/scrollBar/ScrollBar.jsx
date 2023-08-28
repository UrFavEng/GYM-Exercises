import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import gym from "../../assets/icons/gym.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./scrollBar.css";
// import { useBodyPartsQuery } from "../../store/apiSlice";
import { Link } from "react-router-dom";
export default function ScrollBar({ setCat }) {
  // const { data, isLoading } = useBodyPartsQuery();
  // if (isLoading) {
  //   return "loading";
  // }
  // const bodyParts = [...data];
  const bodyParts = [
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ];
  console.log(bodyParts);
  return (
    <>
      <Swiper
        className="ScrollBar"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide
          key={"all"}
          className="slide-scrollBar"
          onClick={() => setCat("all")}
        >
          <Link to="/">
            <div className="logoGym">
              <img src={gym} alt="logoGym" />
            </div>
            <p>All</p>
          </Link>
        </SwiperSlide>

        {bodyParts.map((item) => (
          <SwiperSlide
            key={item}
            className="slide-scrollBar"
            onClick={() => setCat(item)}
          >
            <Link to={`/cat/${item}`}>
              <div className="logoGym">
                <img src={gym} alt="logoGym" />
              </div>
              <p>{item}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="ScrollBar-md"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide
          key={"all"}
          className="slide-scrollBar"
          onClick={() => setCat("all")}
        >
          <Link to="/">
            <div className="logoGym">
              <img src={gym} alt="logoGym" />
            </div>
            <p>All</p>
          </Link>
        </SwiperSlide>

        {bodyParts.map((item) => (
          <SwiperSlide
            key={item}
            className="slide-scrollBar"
            onClick={() => setCat(item)}
          >
            <Link to={`/cat/${item}`}>
              <div className="logoGym">
                <img src={gym} alt="logoGym" />
              </div>
              <p>{item}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="ScrollBar-sm"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide
          key={"all"}
          className="slide-scrollBar"
          onClick={() => setCat("all")}
        >
          <Link to="/">
            <div className="logoGym">
              <img src={gym} alt="logoGym" />
            </div>
            <p>All</p>
          </Link>
        </SwiperSlide>

        {bodyParts.map((item) => (
          <SwiperSlide
            key={item}
            className="slide-scrollBar"
            onClick={() => setCat(item)}
          >
            <Link to={`/cat/${item}`}>
              <div className="logoGym">
                <img src={gym} alt="logoGym" />
              </div>
              <p>{item}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
