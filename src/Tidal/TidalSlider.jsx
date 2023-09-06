import { Link } from "react-router-dom";
import "./TidalDesign.css";
import styled from "styled-components";

const MenuDiv = styled.div`
  height: 40rem;
  width: 80%;
  position: absolute;
  top: 80%;
  left: 11.1rem;
  background-color: #1d0039;

  .menu-link ul {
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5rem;
  }

  .menu-link ul li {
    list-style: none;
    margin-left: 6.5rem;
    margin-top: 2.7rem;
    font-size: 1.5rem;
    position: relative;
  }

  .menu-link ul li a {
    text-decoration: none;
    color: #fff;
    font-family: Arial;
    font-weight: bold;
    transition: 0.4s ease-in-out;
  }
  .menu-link ul li a:hover {
    color: #18f6c6;
  }
  .menu-link ul li a:hover::after {
    content: "";
    width: 100%;
    height: 0.2rem;
    background: white;
    position: absolute;
    bottom: -0.3rem;
    left: 0.1rem;
  }
  .radio {
    width: 100%;
    height: 6rem;
    padding-left: 33rem;
    padding-top: 5rem;
  }
  .radio h2 {
    color: white;
    font-size: 2.8rem;
    font-weight: 600;
  }
  .serach {
    width: 62rem;
    padding-top: 7rem;
    padding-left: 33rem;
  }
  .serach input {
    width: 63rem;
    height: 5rem;
    padding: 0 0.5rem;
    font-size: 1.5rem;
    border: 1px solid white;
    outline: none;
    border-radius: 0.5rem;
  }
  .card {
    width: 80rem;
    height: 40rem;
    background-color: #1d0039;
    margin-left: 32.9rem;
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .Card-1 {
    width: 34rem;
    height: 8rem;
    background-color: red;
    margin-right: 1rem;
    background-color: azure;
  }
  .Card-2 {
    width: 35rem;
    height: 8rem;
    border: 1px solid white;
    background-color: azure;
  }
  .img1 {
    background-color: white;
    padding-right: 1.9rem;
    padding-top: 1rem;
  }
  .cardheading {
    color: black;
    display: flex;
    justify-content: center;
    font-size: 1.8rem;
    font-weight: 600;
    margin-top: -5.6rem;
    width: 19rem;
    background: white;
  }
  .card-sub {
    color: black;
    font-size: 1.4rem;
    font-weight: 600;
    width: 10rem;
    background: white;
    margin-left: 7rem;
  }
  .card-btn {
    color: black;
    background-color: #31e4bd;
    border: none;
    font-size: 1.3rem;
    font-weight: 600;
    width: 8rem;
    height: 3rem;
    position: relative;
    bottom: 3.8rem;
    float: right;
    right: 3rem;
  }
`;

function TidalSlider() {
  return (
    <>
      <MenuDiv className="container-box">
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
      </MenuDiv>
    </>
  );
}
export default TidalSlider;
