import Categories from "./Categories";
import Slider from "./Slider";
import  "./Home.css";

interface CartProps {
  cartItem: any[]; // Replace 'any[]' with the actual type of cart items
  addToCart: (product: any) => void;
}


const Home: React.FC<CartProps> = ({ cartItem, addToCart }) => {

  return (
    <>
      <section className="home">
        <div className="container d_flex">
            <Categories />
            <Slider />
        </div>
      </section>
    </>
  );
};

export default Home;
