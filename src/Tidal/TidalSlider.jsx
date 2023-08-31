import { useState } from "react";
import "./TidalDesign.css";
function TidalSlider() {
  return (
    <>
      <div className="container-box">
        <div className="menu-link">
          <ul>
            <li>
              <a href="#">Buy insurance Cover</a>
            </li>
            <li>
              <a href="#">Trade option</a>
            </li>
            <li>
              <a href="#">Trade options</a>
            </li>
          </ul>
        </div>
        <div className="radio">
          <h2>Pick an assest or Contract</h2>
        </div>
        <div className="serach">
          <input type="text" placeholder="search for anything"></input>
        </div>
      </div>
    </>
  );
}
export default TidalSlider;
