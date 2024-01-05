import React, { useState, lazy, Suspense } from 'react';
import Slider from 'react-slick';
import { FaHeart, FaStar, FaPlus, FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';

// Interfaces for product items and FlashCardProps
interface ProductItem {
  id: number;
  discount: number;
  img: string;
  name: string;
  price: number;
  qty: number;
}

interface FlashCardProps {
  productItems: ProductItem[];
  addToCart: (product: ProductItem) => void;
}

// Lazy-loaded image component
const LazyImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  const loadImage = () => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageSrc(src);
  };

  React.useEffect(() => {
    loadImage();
  }, [src]);

  return <img src={imageSrc} alt={alt} className="flash-card-img" />;
};

// Custom arrow components
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <FaLongArrowAltRight className="i" />
      </button>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <FaLongArrowAltLeft className="i" />
      </button>
    </div>
  );
};

const FlashCard: React.FC<FlashCardProps> = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Using the custom NextArrow component here
    prevArrow: <PrevArrow />, // Using the custom PrevArrow component here
    responsive: [
      {
        breakpoint: 1024, // Adjust this value as needed for tablet devices
        settings: {
          slidesToShow: 5, // Number of slides to show for tablets
        },
      },
      {
        breakpoint: 768, // Adjust this value as needed for mobile devices
        settings: {
          slidesToShow: 2, // Number of slides to show for mobile
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {productItems.map((item: ProductItem) => (
        <div className="box" key={item.id}>
          <div className="product mtop">
            <div className="img display-flex">
              <span className="discount">{item.discount}% Off</span>
              <Suspense fallback={<div>Loading...</div>}>
                <LazyImage src={item.img} alt={item.name} />
              </Suspense>
              <div className="product-like">
                <label>0</label> <br />
                <FaHeart className="heart" onClick={increment} />
              </div>
            </div>
            <div className="product-details">
              <h3>{item.name}</h3>
              <div className="rate">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </div>
              <div className="price">
                <h4>${item.price}.00</h4>
                <button onClick={() => addToCart(item)}>
                  <FaPlus className="plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default FlashCard;
