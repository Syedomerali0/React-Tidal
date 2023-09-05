import { Link } from "react-router-dom";
import "./TidalDesign.css";
function TidalSlider() {
  return (
    <>
      <div className="container-box">
        <div className="menu-link">
          <ul>
            <li>
              <Link to="/">Buy insurance Cover</Link>
            </li>
            <li>
              <Link to="/Tradeoption">Trade options</Link>
            </li>
            <li>
              <Link to="/TradeFuture">Trade Future</Link>
            </li>
          </ul>
        </div>
        <div className="radio">
          <h2>Pick an assest or Contract</h2>
        </div>
        <div className="serach">
          <input type="text" placeholder="search for anything"></input>
        </div>
        <div className="card">
          <div className="Card-1">
            <img className="img1" src="/img/cardimg.png"></img>
            <h4 className="cardheading">Acala</h4>
            <h5 className="card-sub">OxB2..OOC</h5>
            <button className="card-btn">Select</button>
          </div>
          <div className="Card-1">
            <img className="img1" src="/img/cardimg.png"></img>
            <h4 className="cardheading">Acala</h4>
            <h5 className="card-sub">OxB2..OOC</h5>
            <button className="card-btn">Select</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TidalSlider;
