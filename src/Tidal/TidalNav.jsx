import "./TidalDesign.css";
import { FaTwitter, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";
import styled from "styled-components";

const Navbar = styled.nav`
  background-color: #1d0039;
  width: 100%;
  height: 78px;

  .logo {
    color: #18f6c6;
    font-weight: 700;
    font-size: 2rem;
    padding-left: 2rem;
    float: left;
    padding-top: 4rem;
    padding-left: 10rem;
    margin-top: 0.5rem;
  }
  .social-media {
    width: 20rem;
    float: right;
    height: 7rem;
  }
  .social-media ul {
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    padding-right: 20rem;
  }
  .social-media ul li {
    list-style: none;
    margin-right: 2.2rem;
    margin-top: 4.6rem;
  }
  .facebook {
    color: white;
  }
  .instagram {
    color: white;
  }
  .twitter {
    color: white;
  }
`;

function TidalNav() {
  return (
    <>
      <Navbar className="Nav-bar">
        <div className="logo">
          <h2>TIDAL</h2>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="#" target="">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter className="twitter" />
              </a>
            </li>
            <li>
              <a href="#" target="">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
          </ul>
        </div>
      </Navbar>
    </>
  );
}
export default TidalNav;
