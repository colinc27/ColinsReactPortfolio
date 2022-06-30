import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import SocialFollow from "./SocialFollow"
import {
    faFacebook,
    faGithub,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";



function Social() {
    return (
            <div class="social-container bg-dark d-flex flex-row mx-auto justify-content-center">
              <h3>Social Media</h3>
              <a href="https://www.facebook.com/colin.christoph/"
                className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/colin-christoph-4a3180ba/" className="twitter social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://github.com/colinc27"
                className="instagram social">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
    );
  }
  export default Social;