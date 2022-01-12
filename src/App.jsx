// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Result from "./pages/Result";
// import ProductP from "./pages/ProductP";
// import Cart from "./pages/Cart";
// import Result from "./pages/Result";
// import Cart from "./pages/Cart";
import Login from "./pages/Login";

// import ProductList from "./pages/ProductList";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Result from "./pages/Result";
// import Response from "./components/Response";
// import Register from "./pages/Register";
// import Resultletter from "./components/Resultletter";


const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/result">
          <Result />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Router>
    </>
  );

};

export default App;