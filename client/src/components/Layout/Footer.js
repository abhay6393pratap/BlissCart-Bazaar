import React from "react";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer">

      <p className="text-center mt-3">
           <h2>All Rights Reserved  © BlissCartBazaar</h2>
         <Link to="/about">About</Link>
         |<Link to="/contact">Contact</Link>
         |<Link to="/policy">Privacy Policy</Link>
      </p>
      </div>
    </>
  );
};

export default Footer;
