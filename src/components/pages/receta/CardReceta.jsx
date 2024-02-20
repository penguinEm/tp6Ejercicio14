import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardReceta = () => {
  return (
    <Card className="cardDimensiones px-0 mb-4 mt-3 cardEfectos ">
      <Card.Img
        variant="top"
        alt="Imagen de una receta"
        src="https://images.pexels.com/photos/5652188/pexels-photo-5652188.jpeg"
        className="img-fluid cardImgDimensiones"
      />
      <Card.Body>
        <Card.Title className="text-intermedio text-grisOscuro ms-2">
          Arroz con leche
        </Card.Title>
        <Card.Text className="cardScroll text-parrafo fw-bolder">
          <span className="text-danger text-decoration-underline">Descripción</span> La mazamorra es un postre tradicional en
          varios países de América Latina, con variantes en la preparación según
          la región. Esta delicia culinaria suele tener una base de maíz, que
          puede ser en forma de harina de maíz o maíz morado, y se cocina con
          agua, azúcar y diversas especias para lograr una consistencia espesa y
          agradable al paladar.
        </Card.Text>
        <Card.Text className="fw-bold text-parrafo py-0">
          <span className="text-danger text-decoration-underline">Precio $</span> 1000
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-end">
        <Link className="border-0 btn btn-danger" to="/detalleReceta">
          Ver más
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default CardReceta;
