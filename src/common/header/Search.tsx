import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.jpg"
// import logo from '../assets/images/logo.jpg';
import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';

interface SearchProps {
  cartItem: any[]; // Replace 'any[]' with the actual type of cart items
}

const Search: React.FC<SearchProps> = ({ cartItem }) => {
  useEffect(() => {
    window.addEventListener('scroll', function () {
      const search = document.querySelector('.search');
      if (search instanceof Element) {
        search.classList.toggle('active', window.scrollY > 100);
      }
    });
  }, []); // Empty dependency array to run this effect only once

  return (
    <div>
      <section className="search">
        <div className="container c_flex">
          <div className="width">
            <img src={logo} alt="" className="logo" />
          </div>

          <div className="search-box f_flex">
            <FaSearch size={30} className="searchReactIcon" />
            <input type="text" placeholder="Search for products and hit enter" />
            <span>All Products</span>
          </div>

          <div className="icon f_flex width">
            <FaUser className="icon-circle" />
            <div className="cart">
              <Link to="/cart">
                <FaShoppingBag className="icon-circle" />
              </Link>
              <span>{cartItem.length ===0 ? "" : cartItem.length }</span> {/* Use cartItem here */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
