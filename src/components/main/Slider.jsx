import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
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
            <img src="./assets/images/th.png" alt="slide_image" className={`${width}`} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./assets/images/1.png" alt="slide_image" className={`${width}`} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./assets/images/2.png" alt="slide_image" className={`${width}`} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./assets/images/3.png" alt="slide_image" className={`${width}`} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
