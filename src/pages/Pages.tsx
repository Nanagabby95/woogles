import Footer from '../common/footer/Footer';
import Discount from '../components/discount/Discount';
import FlashDeals from '../components/flashDeals/FlashDeals';
import MainpageHome from '../components/mainpage/Home';
import NewArrivals from '../components/newarrivals/NewArrivals';
import TopCate from '../components/top/TopCate';

// Define the type for a single product item
interface ProductItem {
  id: number;
  discount: number;
  img: string;
  name: string;
  price: number;
  qty: number;
}

// Declare productItems as an array of ProductItem
type ProductItems = ProductItem[];

interface PagesProps {
  productItems: ProductItems; 
  cartItem: any; 
  addToCart: (product: any) => void; 
}

const Pages: React.FC<PagesProps> = ({ productItems, cartItem, addToCart }) => {
  return (
    <>
      <MainpageHome cartItem={cartItem} addToCart={addToCart} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Footer />
    </>
  );
};

export default Pages;
