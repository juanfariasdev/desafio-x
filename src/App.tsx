import "./index.css";
import { RoutesNavigation } from "./routes";
import { Dashboard } from "./template/dashboard";
function App() {
  return (
    <Dashboard>
      <RoutesNavigation />
    </Dashboard>
  );
}

export default App;
