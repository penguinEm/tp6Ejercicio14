import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarRecetaApi, obtenerRecetas } from "../../../helpers/queries";

const ItemTablaReceta = ({ receta, setRecetas }) => {
  /* VARIABLES GLOBALES ------------------------------------------------------------------ */

  /* FUNCIONES ----------------------------------------------------------------------------- */

  const borrarReceta = () => {
    Swal.fire({
      title: `¿Estas seguro que deseas borrar la receta ${receta.nombreReceta} ?`,
      text: "Este paso es irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarRecetaApi(receta.id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Borrado!",
            text: `Su receta: ${receta.nombreReceta} ha sido borrada!`,
            icon: "success",
          });
          const recetasActualizadas = await obtenerRecetas();
          setRecetas(recetasActualizadas);
        } else {
          Swal.fire({
            title: "Ops!",
            text: `Se produjo un error intente mas tarde`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr>
      {/* Producto nombre */}
      <td className="pt-5 text-center opciones-responsive">
        {receta.nombreReceta}
      </td>
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
        <Button className="me-1" variant="warning">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" onClick={borrarReceta}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemTablaReceta;
