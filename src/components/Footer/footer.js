import React, { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";
import { Link } from "react-router-dom";
import Widget from "../UI/Widget";
import List from "../UI/List";
import LI from "../UI/List/Item";

const Footer = () => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/*  Start:About  */}
          <div className="col-lg-6 col-sm-12">
            <Widget title="About">
              <p>
                {" "}
                NBM Trade International is a global apparel & footwear sourcing,
                designing and manufacturing service company along with other
                sourcing based in Dhaka, Bangladesh. Having a team with a track
                record of serving the clients, we are confident that we can
                deliver you the best you want.{" "}
              </p>
            </Widget>
          </div>
          {/*  End:About  */}

          {/*  Start:Latest post   */}
          <div className="col-lg-6 col-sm-12">
            <Widget title="Contact">
              <List classes="recent-post">
                <LI>
                  {/* <Link to={process.env.PUBLIC_URL + "/About"} className="address"> Rose Garden, House: 36, Road: 13, Sector 11 Uttara Model Town Dhaka-1230, Bangladesh  </Link> */}
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <span>
                    Rose Garden, House: 36, Road: 13, Sector 11 Uttara Model
                    Town Dhaka-1230, Bangladesh
                  </span>
                </LI>
                <LI>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span>+8801616 403090</span>
                </LI>
                <LI>
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  <span>info@nbmtrade.net </span>
                </LI>
              </List>
            </Widget>
          </div>
          {/*  End:Latest post  */}

          {/*  Start:Subfooter  */}
          <div className="subfooter">
            <div className="copyright_text">
              {" "}
              &copy; {new Date().getFullYear()} NBM Trade International
            </div>

            {/* SOCIAL ICON */}
            <div className="footer_social">
              <ul className="footer_social_icons">
                <li>
                  <a
                    href="https://www.linkedin.com/company/nbm-sourcing-ltd/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/NBMTRADEINTERNATIONAL/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  {" "}
                  <i className="fa fa-twitter"></i>{" "}
                </li>
                <li>
                  {" "}
                  <i className="fa fa-instagram"></i>{" "}
                </li>
              </ul>
            </div>

            <div className="copyright_text">
              Developed by <a href="https://sourceexpert.net/" target="_blank"><strong>SourceExpert</strong></a>
            </div>

            <button
              className={`scrollup ${scroll > top ? "show" : ""}`}
              onClick={() => scrollToTop()}
            >
              <span className="arrow_triangle-up"></span>
            </button>
          </div>
          {/* End:Subfooter  */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
