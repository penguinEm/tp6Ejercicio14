import { Link } from "react-router-dom";

const ItemTablaReceta = () => {
  return (
    <tr>
      {/* Producto nombre */}
      <td className="pt-5 text-center opciones-responsive">Mazamorra</td>
      {/* Precio */}
      <td className="text-center pt-5 opciones-responsive">
        <span>$</span>
        1000
      </td>
      {/* Url de la img */}
      <td className="text-center">
        <img
          src="https://images.pexels.com/photos/5652188/pexels-photo-5652188.jpeg"
          alt="alt del producto"
          className="tablaImagenDimensiones img-fluid img-thumbnail"
        />
      </td>
      {/* Opciones */}
      <td className="text-center pt-5 opciones-responsive">
        <Link className="me-1 btn btn-warning">
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Link className="btn btn-danger">
          <i className="bi bi-trash"></i>
        </Link>
      </td>
    </tr>
  );
};

export default ItemTablaReceta;
