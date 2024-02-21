import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import slide_image_1 from "../../public/th.png";
import slide_image_2 from "../../public/1.png";
import slide_image_3 from "../../public/2.png";
import slide_image_4 from "../../public/3.png";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let width = "w-[1000px]";

function Slider() {
  return (
    <>
      <div className="mt-40 mb-40">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" className={`${width}`} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image" className={`${width}`} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" className={`${width}`} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="slide_image" className={`${width}`} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
