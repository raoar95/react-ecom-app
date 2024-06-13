import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram, FaSquareTwitter, FaSquareYoutube  } from "react-icons/fa6";
import  logoFile from "../assets/Images/logo.png"
import googlePlayImg from "../assets/Images/google-play-badge.png"
import appStoreImg from "../assets/Images/app-store-badge.png"

const Footer = () => {
  return (
    <>
      <footer class="myfooter flow-hidden">
        <div className="footTop">
        <div className="footLogoSec">
            <img src={logoFile} />
        </div>
        <div className="footContentSec flex-space">
          <div className="footBox ellipsis footBox1">
            <h4 className="head ellipsis">COMPANY</h4>
            <p>
              <Link to="/">About US</Link>
            </p>
            <p>
              <Link to="/">Contact Us</Link>
            </p>
          </div>
          <div className="footBox ellipsis footBox2">
            <h4 className="head ellipsis">BUSINESS</h4>
            <p>
              <Link to="/">Sell On Onlineshop</Link>
            </p>
            <p>
              <Link to="/">Claim Free Listing</Link>
            </p>
            <p>
              <Link to="/">Get Business App</Link>
            </p>
          </div>
          <div className="footBox ellipsis footBox3">
            <h4 className="head ellipsis">NEED HELP</h4>
            <p>
              <Link to="/">Guide</Link>
            </p>
            <p>
              <Link to="/">FAQ</Link>
            </p>
            <p>
              <Link to="/">Find Service Centre</Link>
            </p>
          </div>
          <div className="footBox ellipsis footBox4">
            <h4 className="head ellipsis">IMPORTANT LINKS</h4>
            <p>
              <Link to="/">Privacy Policy</Link>
            </p>
            <p>
              <Link to="/">Terms Of Services</Link>
            </p>
            <p>
              <Link to="/">Return & Replacement Policy</Link>
            </p>
            <p>
              <Link to="/">Cancellation Policy</Link>
            </p>
          </div>
          <div className="footBox ellipsis footBox5">
            <h4 class="head ellipsis">GET IT ON</h4>
            <div class="footAppSec">
              <i>
                <Link to="/">
                  <img src={googlePlayImg} />
                </Link>
              </i>
              <br />
              <i>
                <Link to="/">
                  <img src={appStoreImg} />
                </Link>
              </i>
            </div>

            <div class="socialBox">
              <h4 class="head ellipsis">SOCIAL LINKS</h4>
              <div class="socialIconSec flex-space">
                <FaFacebookSquare />
                <FaSquareInstagram />
                <FaSquareTwitter />
                <FaSquareYoutube  />
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="footBottom">Devloped by Arun Rao 😊</div>
      </footer>
    </>
  );
};

export default Footer;
