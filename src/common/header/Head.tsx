import { FaPhone,FaEnvelope  } from "react-icons/fa";
import "./Header.css"


const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="row d-flex text-white">
            <div className="i"><FaPhone />
              <a href="tel:0812924039" className="text-white"><label>+23400000000</label></a>
            </div>
            <div className="i"><FaEnvelope />
              <a href="" className="text-white"><label>hello@gmail.com</label></a>
            </div>
          </div>
          <div className="right row RText">
            <label>FAQs</label>
            <label>Need Help?</label>
            <span>💳</span>
            <label>EN</label>
            <span>💳</span>
            <label>NIG</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
