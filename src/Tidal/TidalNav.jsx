import "./TidalDesign.css";
import { FaTwitter, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";
function TidalNav() {
  return (
    <>
      <nav className="Nav-bar">
        <div className="logo">
          <h1>TIDAL</h1>
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
      </nav>
    </>
  );
}
export default TidalNav;
