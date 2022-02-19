import React from "react";
import { Link } from "react-router-dom";


function Login() {
    return (

        <section className="login">
            <form class="login-form">
                <div>
                    <label for="email-login">email:</label>
                    <input type="text" id="email-login" />
                </div>
                <div>
                    <label for="password-login">password:</label>
                    <input type="password" id="password-login" />
                </div>
                <div>
                    <button type="submit">login</button>
                </div>
                </form>

                <form class="signup-form">
                <div>
                    <label for="username-signup">username:</label>
                    <input type="text" id="username-signup" />
                </div>
                <div>
                    <label for="email-signup">email:</label>
                    <input type="text" id="email-signup" />
                </div>
                <div>
                    <label for="password-signup">password:</label>
                    <input type="password" id="password-signup" />
                </div>
                <div>
                    <button type="submit">signup</button>
                </div>
            </form>
            <div>
                <Link to="/Home">
                  Log In
                </Link>
            </div>
        </section>
    );
  }

    
  export default Login;