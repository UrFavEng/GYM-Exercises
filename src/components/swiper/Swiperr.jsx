// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "./swiperr.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link, useNavigate } from "react-router-dom";
const Swiperr = ({ ListByTarget }) => {
  const rout = useNavigate();

  return (
    <div className="container-lg-md-sm">
      <Swiper
        className="lg"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {ListByTarget.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/exercise/${item.id}`}>
              <img src={item.gifUrl} alt="" />
            </Link>
          </SwiperSlide>
        ))}
        ...
      </Swiper>
      <Swiper
        className="md"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {ListByTarget.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/exercise/${item.id}`}>
              <img src={item.gifUrl} alt="" />
            </Link>
          </SwiperSlide>
        ))}
        ...
      </Swiper>
      <Swiper
        className="sm"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {ListByTarget.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/exercise/${item.id}`}>
              <img src={item.gifUrl} alt="" />
            </Link>
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </div>
  );
};

export default Swiperr;
