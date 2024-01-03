// import { lazy } from "react";
import Tdata, { TdataProps } from './Tdata';

const TopCart = () => {
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
              {/* <LazyLoad height={200} offset={100} once> */}
                <img src={value.img} alt="image" />
              {/* </LazyLoad> */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TopCart;
