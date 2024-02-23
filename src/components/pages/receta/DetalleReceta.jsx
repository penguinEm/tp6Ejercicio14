import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const DetalleReceta = () => {
  return (
    <Container fluid className="main mb-5 mt-3">
      <article className="d-flex flex-column flex-lg-row flex-md-row">
        <div className="my-4 ms-lg-3 px-3 contenedorTextDetalle  order-lg-1 order-md-2">
          <h1 className=" display-6 text-intermedio text-titulo text-shadow">Mazamorra</h1>
          <h2 className="text-titulo fw-lighter border-bottom border-secondary-subtle pb-4 fs-5 ps-1">
            Una croissant es un tipo.
          </h2>
          <p className="text-parrafo fw-bolder">
            <span className="text-danger fw-bold text-decoration-underline">
              Ingredientes
            </span>{" "}
            Una croissant es un tipo de panadería de origen francés que se
            caracteriza por su masa hojaldrada y su forma de media luna. Está
            hecha con una masa laminada que incorpora capas alternas de
            mantequilla y masa de pan, lo que le confiere su textura escamosa y
            crujiente. La croissant tradicional es ligera y aireada por dentro,
            con un exterior dorado y crujiente. Se sirve comúnmente en el
            desayuno o como acompañamiento en diversas comidas. Su sabor
            característico y su elaboración cuidadosa hacen de la croissant una
            delicia reconocida y apreciada en todo el mundo.
          </p>
          <p className="text-parrafo fw-bolder">
            <span className="text-danger fw-bold text-decoration-underline">
              Preparacion
            </span>{" "}
            Una croissant es un tipo de panadería de origen francés que se
            caracteriza por su masa hojaldrada y su forma de media luna. Está
            hecha con una masa laminada que incorpora capas alternas de
            mantequilla y masa de pan, lo que le confiere su textura escamosa y
            crujiente. La croissant tradicional es ligera y aireada por dentro,
            con un exterior dorado y crujiente. Se sirve comúnmente en el
            desayuno o como acompañamiento en diversas comidas. Su sabor
            característico y su elaboración cuidadosa hacen de la croissant una
            delicia reconocida y apreciada en todo el mundo.
          </p>
          
          <hr />

          <div className="d-flex align-items-center justify-content-between">
            <h4>
              <span className="text-danger">Precio: $</span>1000
            </h4>
            <div>
              <Link className="btn btn-outline-danger me-3 px-4" to="/">
                <i className="bi bi-arrow-counterclockwise"></i> <br></br>
                Inicio
              </Link>
              <Link className="btn btn-danger border-0" to="*">
                <i className="bi bi-cart-check-fill"></i> <br></br>
                Comprar
              </Link>
            </div>
          </div>
        </div>
        <div className="contenedorImgDetalle pt-md-5 mt-md-5 mt-lg-0 pt-lg-0 d-flex align-items-center">
          <Image
            src="https://images.pexels.com/photos/13887558/pexels-photo-13887558.jpeg"
            alt=""
            className="rounded-2 img-fluid imgDetalle object-fit-cover"
          ></Image>
        </div>
      </article>
    </Container>
  );
};

export default DetalleReceta;
