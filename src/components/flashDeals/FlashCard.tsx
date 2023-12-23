import { FaHeart, FaStar, FaPlus, FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import Slider from "react-slick";
import { useState } from "react";

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

// Custom arrow components
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <FaLongArrowAltRight  className="i"/>
      </button>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <FaLongArrowAltLeft className="i"/>
      </button>
    </div>
  );
};

const FlashCard: React.FC<FlashCardProps> = ({ productItems, addToCart }) => {
  const [count, setCount]= useState(0);
  const increment =()=>{
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Using the custom NextArrow component here
    prevArrow: <PrevArrow />, // Using the custom PrevArrow component here
  };

  return (
    <Slider {...settings}>
    {productItems.map((item: ProductItem) => {
      return (
        <div className="box" key={item.id}>
          <div className="product mtop">
            <div className="img display-flex">
              <span className="discount">{item.discount}% Off</span>
              <img src={item.img} alt={item.name}  className="flash-card-img"/>
              <div className="product-like">
                <label>0</label> <br />
                <FaHeart className="heart" onClick={increment}  />
              </div>
            </div>
          {/* </div> */}
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
      );
    })}
    </Slider>
  );
};

export default FlashCard;
