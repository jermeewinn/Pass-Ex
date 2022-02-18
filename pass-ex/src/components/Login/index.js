import React from "react";
import { Link } from "react-router-dom";


function Login() {
    return (
        <section className="login">
            <div>
                <h1>Login</h1>
                <Link to="/Home">
                  Log In
                </Link>
            </div>
        </section>
    );
  }

    
  export default Login;