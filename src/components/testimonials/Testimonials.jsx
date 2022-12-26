import React from "react";
import "./testimonials.css";
import testimonialsdata from "../../api/testimonialsdata";

// Import Swiper
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Depoimentos de clientes</h5>
      <h2>Testemunhos</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {testimonialsdata.map(({ avatar, name, testimonal, index }) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar 1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{testimonal}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
