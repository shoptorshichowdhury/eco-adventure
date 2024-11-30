import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner5 from "../../assets/banner5.jpg";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper flex justify-center items-center w-full h-[200px] md:h-[350px] lg:h-[580px] xl:h-[600px] overflow-hidden"
    >
      <SwiperSlide>
        <img src={banner1} className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner2} className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner5} className="w-full h-full object-cover bg-top" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
