import { BrowserRouter, Route, Routes } from "react-router-dom";
import BarraDeNavegacion from "./components/common/BarraDeNavegacion";
import Footer from "./components/common/Footer";
import Inicio from "./components/pages/Inicio";
import Administrar from "./components/pages/Administrar"

function App() {
  return (
    <BrowserRouter>
      <BarraDeNavegacion></BarraDeNavegacion>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route
          exact
          path="/administrar"
          element={<Administrar></Administrar>}
        ></Route>
        <Route path="*" element={<Inicio></Inicio>}></Route>
      </Routes>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
