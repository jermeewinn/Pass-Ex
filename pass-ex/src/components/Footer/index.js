import React from "react";


function Footer() {
    return (
        <section className="footer">
            <div className="p">
                <h3>
                    Contact Us
                </h3>
            </div>
            <div id="target-bottom">
                <a href="https://linktr.ee/emailslist">
                    <img src="https://olc-wordpress-assets.s3.amazonaws.com/uploads/2020/05/new-email-icon.png" alt="linked in"/>
                </a>
                <a href="https://linktr.ee/usergithubs">
                <img id="github" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" title="github link" alt="github" />
                </a>
                <a href="https://linktr.ee/linkedins">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linked in"/>
                </a>
    
            </div>
        </section>
    );
  }

    
  export default Footer;