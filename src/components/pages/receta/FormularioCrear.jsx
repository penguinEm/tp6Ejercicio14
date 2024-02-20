import { Container, Form, Button } from "react-bootstrap";

const FormularioCrear = () => {
  return (
    <Container className=" main px-lg-5 py-5 text-intermedio">
      <h1 className="display-1 mx-5 pb-4 border-bottom border-danger-subtle text-titulo">
        Nueva Receta
      </h1>
      <Form className=" rounded-2 px-lg-5 pt-3">
        <Form.Group
          className="mb-3 border border-1 p-1 border-danger-subtle rounded-1"
          controlId="receta"
        >
          <Form.Label>Nombre de la Receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Budín de pan"
            className="color-inputs"
          />
        </Form.Group>
        <Form.Group
          className="mb-3 border border-1 p-1 border-danger-subtle rounded-1"
          controlId="precio"
        >
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            className="color-inputs"
          />
        </Form.Group>

        <Form.Group
          className="mb-3 border border-1 p-1 border-danger-subtle rounded-1"
          controlId="url"
        >
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="color-inputs"
          />
        </Form.Group>

        <Form.Group
          className="mb-3 border border-1 p-1 border-danger-subtle rounded-1"
          controlId="descripcionBreve"
        >
          <Form.Label>Descripcion*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Una taza de café suave y aromática"
            className="color-inputs"
          />
        </Form.Group>

        <Form.Group
          className="mb-3 border border-1 p-1 border-danger-subtle rounded-1"
          controlId="descripcionAmplia"
        >
          <Form.Label>Preparación*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="El café es una bebida aromática y vigorizante que se obtiene de los granos tostados de la planta de café. Su sabor distintivo y su rica historia lo convierten en una de las bebidas más populares y apreciadas en todo el mundo. Al ser versátil, el café se presenta en una amplia variedad de formas, desde el clásico espresso hasta las elaboradas mezclas de cafés gourmet."
            className="formularioTextArea color-inputs resize"
          />
        </Form.Group>
        <div className="text-end">
          <Button type="submit" variant="danger" className="border-0">
            Guardar
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default FormularioCrear;
