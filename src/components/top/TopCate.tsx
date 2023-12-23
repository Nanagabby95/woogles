import { FaBorderAll } from "react-icons/fa";
import TopCart from "./TopCart";
import "./Style.css";
import "../../App.css";

const TopCate = () => {
  return (
    <>
      <section className="topCat background display_flex">
        <div className="container">
          <div className="heading-left row f_flex">
            <FaBorderAll className="FaBorderAll" />
            <h2>Top Categories</h2>
          </div>
          <div className="heading d_flex">
            <TopCart />

            {/* <FaCaretRight /> */}

            {/* <div className="heading-right row"> */}
            {/* <span>View All</span> */}
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default TopCate;
