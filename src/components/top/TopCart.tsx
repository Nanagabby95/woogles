import Tdata, { TdataProps } from './Tdata';
// import Slider from "react-slick";

const TopCart = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 6,
//     slidesToScroll: 1
//   };
  return (
    <>
      {Tdata.map((value: TdataProps, index: number) => {
        return (
          <div className="box product" key={index}>
            <div className="nametop d_flex">
              <span className="tleft">{value.para}</span>
              <span className="tright">{value.desc}</span>
            </div>
            <div className="img">
              <img src={value.img} alt="image" />
            </div>
          </div>
        )
      })}
    </>
  );
}

export default TopCart;
