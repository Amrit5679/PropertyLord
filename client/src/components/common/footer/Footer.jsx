import React, { useState } from "react";
import { Link } from "react-router-dom";
import { footer } from "../../data/Data";
import "./footer.css";

const Footer = () => {
  const [emailInput,setEmailInput]=useState("");
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="./images/logolord.png" alt="logo image" />
              <div className="headd">Do You Need Help With Anything?</div>
              <p>
                Receive updates, hot deals,discounts sent straignt
                in your inbox every month
              </p>

              <div className="input flex">
                <input 
                  type="text"
                  placeholder="Enter your Email Address..." 
                  value={emailInput}
                  onChange={(e)=>{
                    setEmailInput(e.target.value);
                  }} 
                />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val,index) => (
            <div className="box">
              <h3>{val.title}</h3>
              <ul key={index}>
                {val.text.map((items,ind) => (
                  <li key={ind}> 
                    <Link to={items.path} >{items.list} </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>© 2024 Property Lord. Designd for final year project.</span>
      </div>
    </>
  );
};

export default Footer;
