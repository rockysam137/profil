import * as React from "react";
import '../style/intro1.css'
import Img from "../images/fropil.png";
const Intro = () => {
  return (
    <div>
      <style jsx>{`
      @media Screen and (max-width:550px){
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap');
      .Intro{
      display:flex;
      flex-direction:column; 
      align-items:center;
      }
      .rocky{
      margin:2rem 0;
      display:block;
      margin-left:auto;
      margin-right:auto;
      width:70%;
      border:1px solid grey;
      border-radius:50%;
      }
        .tile{
        }
        .tile h1{
        text-transform: uppercase;
	background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent; 
        }
      
      `}</style>
      <div className="Intro">
        <div className="I-wrapper">
          <img src={Img} className="rocky" alt="rocky" />
        </div>
        <div className="tile">
          <h1>i'm rocky </h1>
        </div>
        <div classname="T-container">
          <div className='T-content'>
            don't like to waste time
          </div>
          <div className='T-content'>
            my hobby is coding
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
