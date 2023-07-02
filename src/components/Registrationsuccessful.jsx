import React from "react";
import {Link} from "react-router-dom";

const Registrationsuccessful = () => {
  return (
    <div className="register-div">
      <div className="bg"></div>
      <div className="bgg">
      <h1 className="ov">Sign up Successful</h1>
      <Link to="/signin">
        <h1 >You can log in</h1>
      </Link>
      </div>
    </div>
  );
};

export default Registrationsuccessful;
