import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { usedTypedSelector } from "./hooks/useTypedSelector";
import { useRoutes } from "./routes";

function App() {
  const { token } = usedTypedSelector((state) => state.auth);
  //const routes = useRoutes(!!token);
  const routes = useRoutes(!!token);
  //testem
  return (
    <div className="App">
      <Router>
        <Navbar />
        {routes}
      </Router>
    </div>
  );
}

export default App;
