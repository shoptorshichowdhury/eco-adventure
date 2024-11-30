import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [allTestimonial, setAllTestimonial] = useState([]);
  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => setAllTestimonial(data));
  }, []);

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper w-11/12 mx-auto flex justify-center items-center my-12"
    >
      {allTestimonial.map((item, idx) => (
        <SwiperSlide key={idx}>
          <TestimonialCard item={item}></TestimonialCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonial;
