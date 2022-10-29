import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ClienteLista } from "./pages/clientes";
import { VendasLista } from "./pages/vendas";

function RoutesNavigation() {
  return (
    <Router>
      <Routes>
        <Route path="/lista/clientes" element={<ClienteLista />} />
        <Route path="/lista/vendas" element={<VendasLista />} />
      </Routes>
    </Router>
  );
}

export { RoutesNavigation };
