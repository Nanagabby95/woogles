import "./Footer.css"
import { FaGooglePlay, FaApple } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
            <div className="box">
                <h1>Woogles Limited</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsum facilis quos?</p>
                <div className="icon d_flex">
                    <div className="img d_flex">
                        <span>Google Play</span>
                        <FaGooglePlay size={50} color="blue" />
                    </div>
                    <div className="img d_flex">
                        <span>App Store</span>
                        <FaApple size={50} color="blue" />
                    </div>
                </div>
            </div>
            <div className="box">
                <h2>About Us</h2>
                <ul>
                    <li>Careers</li>
                    <li>Our Stores</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div className="box">
                <h2>Customer Care</h2>
                <ul>
                    <li>Help Center</li>
                    <li>How to Buy</li>
                    <li>Track your Order</li>
                    <li>Returns & Refunds</li>
                </ul>
            </div>
            <div className="box">
                <h2>Contact Us</h2>
                <ul>
                    <li>Bayelsa, Nigeria</li>
                    <li>Email:</li>
                    <li>Phone:</li>
                </ul>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
