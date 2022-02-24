import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <section id="Nav">
        <h2>
          <a href="/">
              Pass X
          </a>
        </h2>
        <header className="flex-row px-1">
          <nav>
            <ul className="flex-row">
              <li className="mx-2">
                  
                <Link to="/">
                  Log Out
                </Link>
              </li>
              <li className="mx-2">
                  
                <Link to="/YourAccount">
                  Your Account
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </section>
    );
  }
  
  export default Nav;