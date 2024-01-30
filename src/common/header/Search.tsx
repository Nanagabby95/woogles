import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.jpg"
import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';
import Tdata, { TdataProps } from '../../components/top/Tdata'; 

interface SearchProps {
  cartItem: any[]; // Replace 'any[]' with the actual type of cart items
}

const Search: React.FC<SearchProps> = ({ cartItem }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<TdataProps[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = Tdata.filter(product =>
      product.para.toLowerCase().includes(query)
    );
    setSearchResults(query.length > 0 ? filtered : []);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const filtered = Tdata.filter(product =>
        product.para.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    }
  };

  return (
    <div>
      <section className="search">
        <div className="container c_flex">
          <div className="width">
            <img src={logo} alt="" className="logo" />
          </div>

          <div className="search-box f_flex">
            <FaSearch size={30} className="searchReactIcon" />
            <input
              type="text"
              placeholder="Search for products"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
            <span>All Products</span>
          </div>

          <div className="f_flex width"> {/* Container for user and cart icons */}
            <div className="icon">
              <FaUser className="icon-circle" />
            </div>
            <div className="cart">
              <Link to="/cart">
                <FaShoppingBag className="icon-circle" />
              </Link>
              <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
            </div>
          </div>
        </div>

        {searchQuery.length > 0 && (
          <div className="search-results">
            {searchResults.map(product => (
              <div key={product.para} className="product-item">
                <div className="product-details">
                  <span>{product.para}</span>
                  <p>{product.desc}</p>
                </div>
                <img src={product.img} alt={product.para} />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Search;
