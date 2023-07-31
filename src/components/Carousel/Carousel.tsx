import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';
import Image from 'next/image';

const settings = {
  dots: true,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        {Array.from(Array(5), (i, index) => {
          return (
            <div key={index} className={styles.slider_image_content}>
              <Image
                src="https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg"
                width={184}
                height={276}
                alt="Like Icon"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
