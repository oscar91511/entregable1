import React from "react";
import ButtonIcon from "./ButtonIcon";
import "./styles/ContainerInfo.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ContainerInfo = ({ quote, handleNewQuote }) => {
  return (
    <section className="containerInfo">
      <h1 className="containerInfo__title">About Galaxys</h1>
      <header>
      <a className="Github__icon" target="_blank" rel="noopener noreferrer"href="https://github.com/oscar91511/entregable1">
          <i className="bx bxl-github "></i>
        </a>
        <a className="Linkedin__icon"target="_blank" rel="noopener noreferrer"href="https://www.linkedin.com/in/oscar-eduardo-lopez-restrepo-968a91265/" >
          <i className="bx bxl-linkedin "></i>
        </a>
        <a className="Instagram__icon" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/oscar915lr/" >
          <i className="bx bxl-instagram"></i>
        </a>
      </header>
      <div className= "containerInfo_button">
        <ButtonIcon onClick={handleNewQuote}>
          <ArrowForwardIosIcon />
        </ButtonIcon>
      </div>
      <article className="containerInfo_phrase">
        <p>{quote.phrase}</p>
      </article>

      <article className="containerInfo__author">
        <h4>fuente: {quote.author}</h4>
      </article>
      
    </section>
  );
};

export default ContainerInfo;
