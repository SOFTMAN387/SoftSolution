import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="container">
          <div class="col-1">
            <img src="/logo.png" alt="" />
            <p>
              Follow my instagram channel named mubashar_dev to see more of such
              projects and other posts. Also Like and share these posts.Also
              follow me on Github and Linkedin. I hope you will like my content.
            </p>
          </div>
          <div class="col-2">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Categories</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
              <li>
                <Link to="#">Services</Link>
              </li>
            </ul>
          </div>
          <div class="col-3">
            <h3>Services</h3>
            <ul>
              <li>
                <Link to="#">HTML</Link>
              </li>
              <li>
                <Link to="#">CSS</Link>
              </li>
              <li>
                <Link to="#">JavaScript</Link>
              </li>
              <li>
                <Link to="#">React</Link>
              </li>
              <li>
                <Link to="#">Python</Link>
              </li>
              <li>
                <Link to="#">C++</Link>
              </li>
            </ul>
          </div>
          <div class="col-4">
            <h3>Newsletter</h3>
            <form>
              <i class="far fa-envelope"></i>
              <input type="email" placeholder="Enter your email" required />
              <button>
                <i class="fas fa-arrow-right"></i>
              </button>
            </form>
            <div class="social-icons">
              <Link to="#">
                <i class="fab fa-facebook-f"></i>
              </Link>
              <Link to="#">
                <i class="fab fa-twitter"></i>
              </Link>
              <Link to="#">
                <i class="fab fa-instagram"></i>
              </Link>
              <Link to="#">
                <i class="fab fa-Linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>
        <div class="footer-2">
          <p>© 2021 | Made with ❤️ by Mubashar Dev. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
