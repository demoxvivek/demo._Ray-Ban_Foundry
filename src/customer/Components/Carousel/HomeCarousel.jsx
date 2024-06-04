import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { homeCarouselData } from "./HomeCaroselData";
import { useNavigate } from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();

const HomeCarousel = () => {
  const navigate = useNavigate();
  const item = homeCarouselData.map((item, index) => (
    <img
      className="cursor-pointer"
      // onClick={() => navigate(item.path)}
      src={`${item.image}`}
      alt={`banner-${index + 1}`}
      onDragStart={handleDragStart}
      role="presentation"
      // style={{ height: 450, width: 1500 }}
      style={{
        // width: "100vw",
        objectFit: "contain",
        // height: "350px",

      }}
    />
  ));
  return (
    <AliceCarousel
      mouseTracking
      items={item}
      autoPlay
      infinite
      autoPlayInterval={3000}
      disableButtonsControls
    />
  );
};

export default HomeCarousel;
