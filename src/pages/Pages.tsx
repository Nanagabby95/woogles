import React, { lazy, Suspense } from 'react';
import SpinnerIcon from '../common/spinnerIcon';
const Footer = lazy(() => import('../common/footer/Footer'));
const Discount = lazy(() => import('../components/discount/Discount'));
const FlashDeals = lazy(() => import('../components/flashDeals/FlashDeals'));
// const { FooterCarousel } = lazy(() => import('../components/footersection/footerCarousel'));
const MainpageHome = lazy(() => import('../components/mainpage/Home'));
const NewArrivals = lazy(() => import('../components/newarrivals/NewArrivals'));
const TopCate = lazy(() => import('../components/top/TopCate'));
// const data = lazy(() => import('../components/footersection/data'));

interface ProductItem {
  id: number;
  discount: number;
  img: string;
  name: string;
  price: number;
  qty: number;
}

type ProductItems = ProductItem[];

interface PagesProps {
  productItems: ProductItems;
  cartItem: any;
  addToCart: (product: any) => void;
}

const Pages: React.FC<PagesProps> = ({ productItems, cartItem, addToCart }) => {
  return (
    <Suspense fallback={<SpinnerIcon />}>
      <MainpageHome cartItem={cartItem} addToCart={addToCart} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      {/* <FooterCarousel images={data.slides} /> */}
      <Footer />
    </Suspense>
  );
};

export default Pages;