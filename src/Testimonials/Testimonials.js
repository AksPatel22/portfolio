import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="testimonail container section">
      <h2 className="section__title">My clients say</h2>
      <span className="section__subtitle"></span>
      <Swiper
        className="testimonial__container"
        slidesPerView={2}
        spaceBetween={24}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000 }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {/* {Data.map((val) => {
          return (
            <SwiperSlide className="testimonial__card" key={val.id}>
              <img src={val.image} alt="" className="testimonial__img" />
              <h3 className="testimonial__name">{val.title}</h3>
              <p className="testimonial__description">{val.description}</p>
            </SwiperSlide>
          );
        })} */}
      </Swiper>
    </section>
  );
};

export default Testimonials;
