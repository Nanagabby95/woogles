import { FaPhone,FaEnvelope  } from "react-icons/fa";
import "./Header.css"


const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="row d_flex">
            <div className="i"><FaPhone /></div>
            <label>+23400000000</label>
            <div className="i"><FaEnvelope /></div>
            <label>hello@gmail.com</label>
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
