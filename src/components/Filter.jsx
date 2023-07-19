import React from 'react';
import {Link} from "react-router-dom";

const filter = () => {
  return (
    <div>
        <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to="/men">
                  Male Wears
                </Link>
                <Link className="dropdown-item" to="/women">
                  Female Wears
                </Link>
                <Link className="dropdown-item" to="/jewelery">
                  Jewelery
                </Link>
                <Link className="dropdown-item" to="/electronics">
                  Electronics/Gadgets
                </Link>
              </div>
            </div>

      
    </div>
  )
}

export default filter