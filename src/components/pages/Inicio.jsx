import { Container } from "react-bootstrap";
import ContenedorCards from "./ContenedorCards";

const Inicio = () => {
  return (
    <main className="main">
      <Container>
        <article>
          <h1 className="my-5 text-titulo text-grisOscuro display-4 border-bottom border-danger-subtle">Recetas de Cocina</h1>
        </article>
        <ContenedorCards></ContenedorCards>
      </Container>
    </main>
  );
};

export default Inicio;
