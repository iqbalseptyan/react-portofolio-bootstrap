import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Portofolio Website</h1>
        <Typed
          className="typed-text"
          strings={["Software Developer", "Backend Developer"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <a href="#" className="btn-main-offer">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
