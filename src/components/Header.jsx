import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headerLinks = [
    "Home",
    "Events",
    "Blogs",
    "Signin",
  ];
  const [activeTab, setActiveTab] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto"><Link to='/'>Fashion Trends</Link></h1>
          <nav id="navbar" className="navbar">
            <ul>
              {headerLinks.map((link, index) => {
                const location =
                  "/" + (link === "Home" ? "" : link.toLowerCase());
                return (
                  <li key={"headerlink" + index}>
                    <Link
                      to={location}
                      className={activeTab === link ? "active" : ""}
                      onClick={() => setActiveTab(link)}
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {!toggle ? (
              <i
                className="bi bi-list mobile-nav-toggle"
                onClick={() => setToggle(true)}
              />
            ) : (
              <CloseIcon className="mobileNav" onClick={() => setToggle(false)} />
            )}
          </nav>
        </div>
        <div
          className="mobileNav container"
          style={!toggle ? {display: 'none'} : {}}
        >
          <ul style={{ listStyleType: "none", marginBottom: "0px" }}>
            {headerLinks.map((link, index) => {
              const location =
                "/" + (link === "Home" ? "" : link.toLowerCase());
              return (
                <li key={"headerlink_mobile_" + index}>
                  <Link
                    to={location}
                    className={
                      activeTab === link ? "active headerLinks" : "headerLinks"
                    }
                    style={{textDecoration: 'none'}}
                    onClick={() => setToggle(false)}
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
