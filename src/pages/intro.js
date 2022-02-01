import * as React from "react";
import '../style/intro1.css'
import Img from "../images/fropil.png";
const Intro = () => {
  return (
    <div>
      <div className="Intro">
        <div className="I-wrapper">
          <img src={Img} className="rocky" alt="rocky" />
        </div>
        <div className="tile">
          <h1>PortFolio</h1>
        </div>
        <div classname="T-container">
          <div className='T-content'>
            Saya Rocky, saya seorang antusias
            dalam dunia programing
          </div>
          <div className='T-content'>
            saat ini suka bekerja dengan nodejs/gatsbyjs
            & arduino
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
