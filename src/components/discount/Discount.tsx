import Dcard from "./Dcard";

const Discount = () => {
  return (
    <>
      <section className="discount background newarrivals">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
              <img
                src="https://e7.pngegg.com/pngimages/665/391/png-clipart-shopping-cart-online-shopping-icon-red-shopping-cart-service-orange.png"
                alt=""
                className="discount-img"
              />
              <h2>Discount</h2>
            </div>
            <div className="heading-right row">
              <span>View All</span>
            </div>
            <Dcard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Discount;
