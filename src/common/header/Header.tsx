import Head from "./Head";
import Navbar from "./Navbar";
import Search from "./Search";
import "./Header.css";

interface HeaderProps {
  cartItem: any[]; // Replace 'any[]' with the actual type of cart items
}

const Header: React.FC<HeaderProps> = ({ cartItem }) => {
  return (
    <>
      <Head />
      <Search cartItem={cartItem} />
      <Navbar />
    </>
  );
};

export default Header;
