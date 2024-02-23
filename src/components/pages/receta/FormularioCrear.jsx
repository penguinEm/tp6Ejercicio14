import { Container, Form, Button } from "react-bootstrap";

const FormularioCrear = () => {
  return (
    <Container className=" main px-lg-5 py-5 text-intermedio">
      <h1 className="display-1 mx-5 pb-4 border-bottom border-danger-subtle text-titulo">
        Nueva Receta
      </h1>
      <Form className=" rounded-2 px-lg-5 pt-3">
        {/* nombreReceta */}
        <Form.Group
          className="mb-3 border border-1 p-1 border-danger-subtle rounded-1"
          controlId="receta"
        >
          <Form.Label>Nombre de la Receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Mazamorra"
            className="color-inputs"
          />
        </Form.Group>

        {/* precio */}
        <Form.Group
          className="mb-3 border border-1 p-1 border-danger-subtle rounded-1"
          controlId="precio"
        >
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 750"
            className="color-inputs"
          />
        </Form.Group>

        {/* imagen */}
        <Form.Group
          className="mb-3 border border-1 p-1 border-danger-subtle rounded-1"
          controlId="imagen"
        >
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="color-inputs"
          />
        </Form.Group>

        {/* descripcion */}
        <Form.Group
          className="mb-3 border border-1 p-1 border-danger-subtle rounded-1"
          controlId="descripcion"
        >
          <Form.Label>Descripcion*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Postre tradicional delicioso"
            className="color-inputs"
          />
        </Form.Group>

        {/* ingredientesPreparacion */}
        <Form.Group
          className="mb-3 border border-1 p-1 border-danger-subtle rounded-1"
          controlId="ingredientes"
        >
          <Form.Label>Ingredientes*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="2 tazas de pan rallado, 2 tazas de leche, 3 huevos, 1 taza de azúcar, 1 cucharadita de esencia de vainilla, frutas confitadas al gusto"
            className="formularioTextArea color-inputs resize"
          />
        </Form.Group>

        {/* preparacion */}
        <Form.Group
          className="mb-3 border border-1 p-1 border-danger-subtle rounded-1"
          controlId="preparacion"
        >
          <Form.Label>Preparación*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Cocinar el maíz morado con canela y clavos de olor. Agregar azúcar y mezclar. Incorporar frutas picadas. Cocinar a fuego lento hasta obtener una consistencia espesa y deliciosa"
            className="formularioTextArea color-inputs resize"
          />
        </Form.Group>
        <div className="text-end">
          <Button type="submit" variant="danger" className="border-0">
            Crear Receta
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default FormularioCrear;
