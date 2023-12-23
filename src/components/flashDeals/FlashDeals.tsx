import { FaBolt } from "react-icons/fa";
import FlashCard from "./FlashCard";
import { productItems } from "./Data";

interface FlashDealsProps {
  productItems: productItems[]; // Define the prop type as an array of ProductItem
  addToCart: (product: any) => void; // Define the type for addToCart function
}

const FlashDeals: React.FC<FlashDealsProps> = ({ productItems, addToCart }) => {
  return (
    <>
      <section className="flash background">
        <div className="container">
          <div className="heading f_flex">
            <FaBolt className="i" />
            <h1>Flash Deals</h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
