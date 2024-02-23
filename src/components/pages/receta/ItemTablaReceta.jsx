import { Link } from "react-router-dom";

const ItemTablaReceta = ({receta}) => {
  return (
    <tr>
      {/* Producto nombre */}
      <td className="pt-5 text-center opciones-responsive">{receta.nombreReceta}</td>
      {/* Precio */}
      <td className="text-center pt-5 opciones-responsive">
        <span>$</span>
        {receta.precio}
      </td>
      {/* Url de la img */}
      <td className="text-center">
        <img
          src={receta.imagen}
          alt={receta.nombreReceta}
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
