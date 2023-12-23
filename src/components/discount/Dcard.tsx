import Ddata from "./Ddata";
import Slider from "react-slick";
import "../../.././src/App.css"; // Assuming the CSS file path

const Dcard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7, // Default number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    margin: 20,
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
    <>
      <Slider {...settings}>
        {Ddata.map((value, index) => {
          return (
            <div className="box product" key={index}>
              <div className="box">
                <div className="img discount-img-div">
                  <img src={value.img} alt="" width="100%" />
                </div>
                <h4 className="names">{value.name}</h4>
                <h4>${value.price}</h4>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Dcard;
