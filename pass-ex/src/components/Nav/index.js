import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <section>        
          <section class="candy-stripe1">
          <ul>
            <li class="stripe"></li>
            <li class="stripe"></li>
            <li class="stripe"></li>
            <li class="stripe"></li>
            <li class="stripe"></li>
            <li class="stripe"></li>
            <li class="stripe"></li>
            <li class="stripe"></li>
            <li class="stripe"></li>
            <li class="stripe"></li>
          </ul>
          </section>
          <section id="Nav">
          <div id="title">
            <a id="title-words" href="/">
                Pass X
            </a>
            <p>“Travel is the only thing you buy that makes you richer”<br></br> – Anonymous</p>
            <img id="plane" src="https://www.kindpng.com/picc/m/5-57688_plane-png-image-airplane-clip-art-transparent-background.png" className="image" alt="plane logo" />
          </div>
          <header className="flex-row">
            <nav>
              <ul className="flex-row">
                <li className="mx-2">
                  <Link className="button is-info" to="/YourAccount">
                    Your Account
                  </Link> 
                </li>
                <li className="mx-2">
                    <Link className="button is-info"  to="/">
                    Log Out
                    </Link>
                </li>
              </ul>
            </nav>
          </header>
          </section>
          <section class="candy-stripe">
            <ul>
              <li class="stripe"></li>
              <li class="stripe"></li>
              <li class="stripe"></li>
              <li class="stripe"></li>
              <li class="stripe"></li>
              <li class="stripe"></li>
              <li class="stripe"></li>
              <li class="stripe"></li>
              <li class="stripe"></li>
              <li class="stripe"></li>
            </ul>
          </section>
      </section>
    );
  }
  
  export default Nav;