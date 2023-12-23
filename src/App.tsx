import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data, { productItems } from "./components/flashDeals/Data";
import Cart from "./common/cart/Cart";
import { useState } from "react";
// import TopCate from "./components/top/TopCate";

function App() {
  // Step 1: Fetch data from the database
  const [cartItem, setCartItem] = useState<productItems[]>([]);

  const addToCart = (product: any) => {
    const productExit = cartItem.find((PItem) => PItem.id === product.id);
    if (productExit) {
      setCartItem(
        cartItem.map((PItem) =>
          PItem.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : PItem
        )
      );
    }else{
      setCartItem([...cartItem,{...product,qty:1}])
    }
  };
  const decreaseQty = (product: any) => {
    // Find the index of the product in the cartItem array
    const updatedCart = cartItem.map((item) =>
      item.id === product.id ? { ...item, qty: item.qty - 1 } : item
    );
  
    // Filter out items with quantity greater than zero
    const filteredCart = updatedCart.filter((item) => item.qty > 0);
  
    setCartItem(filteredCart);
  };
  
  

  return (
    <div className="App">
      <Router>
        {/* Pass the cartItem prop to the Header component */}
        <Header cartItem={cartItem} />
        <Routes>
          <Route
            path="/"
            element={
              <Pages
                productItems={Data}
                cartItem={cartItem}
                addToCart={addToCart}
              />
            }
          />

          <Route
            path="/cart"
            element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty}  />}
          />
           {/* <Route path="/TopCate" element={<TopCate />} />  */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
