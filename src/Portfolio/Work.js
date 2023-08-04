import React, { useEffect, useState } from "react";
import projectImg from "../assets/work1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Work = ({data}) => {
  console.log(data);
  const [toggle, setToggle] = useState(0);
  const toggleTab = (index) => {
    setToggle(index);
  };
  useEffect(()=>{
if(toggle !== 0){
  document.body.style.overflow = 'hidden'
}
else{
  document.body.style.overflow = 'visible'

}
  },[toggle])

  return (
    <div className="work__card">
      <div
        className={
          toggle === 1 ? "services__modal active-modal" : "services__modal"
        }
      >
        <div className="services__modal-content">
          <i
            className="uil uil-times services__modal-close"
            onClick={() => toggleTab(0)}
          ></i>
          <span className="modal__heading">
            {/* <i className="uil uil-web-grid service__modal-icon"></i> */}
            <h3 className="services__modal-title">{data.title}</h3>
          </span>
          <p className="services__modal-description">All the best</p>
          <div className="services__modal-slider">
          <Swiper
      style={{ width: '100%', height: '100%' }}
      slidesPerView={1}
      spaceBetween={24}
      loop={true}
      grabCursor={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
    >
      <SwiperSlide>
        <div className="swiper-image" style={{ backgroundColor: 'beige' }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-image" style={{ backgroundColor: 'blue' }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-image" style={{ backgroundColor: 'cadetblue' }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-image" style={{ backgroundColor: 'chartreuse' }}></div>
      </SwiperSlide>
    </Swiper>
    </div>
          <div className="li12">
          <ul className="services__modal-services ">
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">Lorem Lorem LoremLoremLoremLoremLorem LoremLorem.</p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">Lorem Lorem LoremLoremLoremLoremLorem LoremLorem.</p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">Lorem Lorem LoremLoremLoremLoremLorem LoremLorem.</p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">Lorem Lorem LoremLoremLoremLoremLorem LoremLorem.</p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">Lorem Lorem LoremLoremLoremLoremLorem LoremLorem.</p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">Lorem Lorem LoremLoremLoremLoremLorem LoremLorem.</p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">Lorem Lorem LoremLoremLoremLoremLorem LoremLorem.</p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">Lorem Lorem LoremLoremLoremLoremLorem LoremLorem.</p>
            </li><li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">Lorem Lorem LoremLoremLoremLoremLorem LoremLorem.</p>
            </li><li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">Lorem Lorem LoremLoremLoremLoremLorem LoremLorem.</p>
            </li><li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">Lorem Lorem LoremLoremLoremLoremLorem LoremLorem.</p>
            </li><li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">Lorem Lorem LoremLoremLoremLoremLorem LoremLorem.</p>
            </li><li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">Lorem Lorem LoremLoremLoremLoremLorem LoremLorem.</p>
            </li><li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">Lorem Lorem LoremLoremLoremLoremLorem LoremLorem.</p>
            </li><li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">Lorem Lorem LoremLoremLoremLoremLorem LoremLorem.</p>
            </li><li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">Lorem Lorem LoremLoremLoremLoremLorem LoremLorem.</p>
            </li><li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">Lorem Lorem LoremLoremLoremLoremLorem LoremLorem.</p>
            </li>
          </ul>
          </div>
          
      </div> 
      </div>          
      <img src={projectImg} alt="img" className="work__img" />
      <h3 className="work__title">{data.title}</h3>
      <p>desc</p>
      <a
        href="#"
        className="work__button"
        onClick={(e) => {
          e.preventDefault();
          toggleTab(1);
        }}
      >
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default Work;
