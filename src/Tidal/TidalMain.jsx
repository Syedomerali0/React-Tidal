import "./TidalDesign.css";
import styled from "styled-components";
const MainDiv = styled.div`
  width: 39rem;
  height: 30rem;
  float: left;
  margin-top: 9.8rem;

  .main-heading {
    color: white;
    font-size: 4.4rem;
    font-weight: 700;
    text-align: justify;
  }
  .sub-heading {
    margin-top: 2.4rem;
    color: white;
    font-size: 1.9rem;
    font-weight: 100;
    text-align: justify;
  }
`;
const DivButton = styled.div`
  display: flex;
  justify-content: center;
  width: 29rem;
  margin-left: -3rem;
  margin-top: 2rem;
  padding-right: 2rem;

  .connect-button {
    background: linear-gradient(to right, #18f6c6, #12e7b9f1);
    color: #0f0f0f;
    align-self: end;
    border: none;
    width: 22rem;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-weight: 700;
    cursor: pointer;
    border: 3px solid #18f6c6;
    margin: 1rem 1rem;
    padding: 0.8rem;
    height: 5rem;
  }
`;
const ImgDiv = styled.div`
  width: 52rem;
  height: 32rem;
  margin: auto;
  float: right;
  border-radius: 0.1rem;
  padding-top: 0.8rem;
`;

function TidalMain() {
  return (
    <>
      <div className="split-left">
        <MainDiv className="Ad-container">
          <h2 className="main-heading">
            Crosschain DeFi <br /> made simple
          </h2>
          <h3 className="sub-heading">
            insure assests across chain with an AWM
            <br /> powered options-futures liquidity bridge
          </h3>
          <DivButton className="div-button">
            <button className="connect-button">Connect Metamask</button>
          </DivButton>
        </MainDiv>
      </div>
      <ImgDiv className="img-container">
        <img src="/img/Group 1419.png" alt="img"></img>
      </ImgDiv>
    </>
  );
}
export default TidalMain;
