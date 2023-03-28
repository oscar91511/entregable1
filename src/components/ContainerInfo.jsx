import React from "react";
import ButtonIcon from "./ButtonIcon";
import "./styles/ContainerInfo.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ContainerInfo = ({ quote, handleNewQuote }) => {
  return (
    <section className="containerInfo">
      <h1 className="containerInfo__title">About Galaxys</h1>
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
