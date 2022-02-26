import React from "react";
import { Link } from "react-router-dom";


function Login() {
    return (

        <section className="login">
            <form class="login-form">
                <div className="entry-field">
                    <div className="color-correct">
                    <h2>Have an Account? <br></br> Sign in Here</h2>
                    <label for="email-login">email:</label>
                    <input class="input is-info" type="text" id="email-login" />
                    <label for="password-login">password:</label>
                    <input class="input is-info" type="password" id="password-login" />
                    <div>
                        <button className="button is-info is-outlined" type="submit">login</button>
                    </div>
                </div>
                </div>
                </form>

            <form className="signup-form">
                <div className="entry-field">
                    <div className="color-correct">
                    <h2>New to Pass Ex? <br></br> Create an Account </h2>
                    <label for="username-signup">username:</label>
                    <input class="input is-info" type="text" id="username-signup" />
                    <label for="email-signup">email:</label>
                    <input class="input is-info" type="text" id="email-signup" />
                    <label for="password-signup">password:</label>
                    <input class="input is-info" type="password" id="password-signup" />
                    <button className="button is-info is-outlined" type="submit">signup</button>
                </div>
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