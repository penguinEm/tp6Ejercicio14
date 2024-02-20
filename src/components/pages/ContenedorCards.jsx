import React from "react";
import CardReceta from "./receta/CardReceta";

const ContenedorCards = () => {
  return (
    <article className="row justify-content-center justify-content-sm-center justify-content-lg-between justify-content-md-between">
      <CardReceta></CardReceta>
      <CardReceta></CardReceta>
      <CardReceta></CardReceta>
      <CardReceta></CardReceta>
      <CardReceta></CardReceta>
      <CardReceta></CardReceta>
      <CardReceta></CardReceta>
    </article>
  );
};

export default ContenedorCards;
