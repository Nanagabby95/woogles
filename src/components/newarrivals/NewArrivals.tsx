import { FaCaretRight } from "react-icons/fa";
import Cart from "./Cart";

const NewArrivals = () => {
  return (
    <>
      <section className="newarrivals background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
              <img
                src="https://gditools.com/wp-content/uploads/2017/12/new-logo.gif"
                alt=""
                className="discount-img"
              />
              <h2>New Arrival</h2>
            </div>
            <div className="heading-right row">
              <span>View All</span>
              <FaCaretRight />
            </div>
          </div>
          <Cart />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
