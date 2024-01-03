import  { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./carousel.css";

interface Image {
  id: number;
  src: string;
  alt: string;
}

interface FooterCarouselProps {
  images: Image[];
}

export const FooterCarousel: React.FC<FooterCarouselProps> = ({ images }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide) => (slide === Math.ceil(images.length / 6) - 1 ? 0 : slide + 1));
  };

  const prevSlide = () => {
    setSlide((slide) => (slide === 0 ? Math.ceil(images.length / 6) - 1 : slide - 1));
  };

  const startIdx = slide * 6;
  const endIdx = Math.min((slide + 1) * 6, images.length);

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {images.slice(startIdx, endIdx).map((item: Image) => (
        <img key={item.id} src={item.src} alt={item.alt} className="slide-image" />
      ))}
      <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
      <span className="indicators">
        {Array.from({ length: Math.ceil(images.length / 6) }, (_, idx) => (
          <button
            key={idx}
            className={slide === idx ? "indicator" : "indicator indicator-inactive"}
            onClick={() => setSlide(idx)}
          ></button>
        ))}
      </span>
    </div>
  );
};
