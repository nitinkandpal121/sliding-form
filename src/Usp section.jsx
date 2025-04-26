import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./ServicesSection.css";

const services = [
  "Data Processing",
  "Presentation Design",
  "Graphic Design",
  "Web Development",
  "App Development",
  "Digital Marketing",
];

const ServicesSection = () => {
  return (
    <div className="services-section">
      <h2>We’ve got you covered!</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <div className="icon-placeholder">📦</div>
              <h3>{service}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="bottom-text">
        <p>
          Still unsure about the service you require? Just send us a message
          and our team will get in touch with you.
        </p>
        <button className="get-started">Get Started</button>
      </div>
    </div>
  );
};

export default ServicesSection;
