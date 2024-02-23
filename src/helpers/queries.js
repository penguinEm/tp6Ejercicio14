const URI_RECETAS = import.meta.env.VITE_API_PRODUCTOS;

/* GET de TODOS los objetos de nuestro array en la fake api*/
export const obtenerRecetas = async () => {
  try {
    const respuesta = await fetch(URI_RECETAS);
    const recetas = await respuesta.json();
    return recetas;
  } catch (error) {
    console.log(error);
  }
};
