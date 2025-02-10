import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Favorites from "../pages/Favorites/Favorites";

function Routing() {
  return(
    <Routes>
      <Route path="/" Component={ Home } />
      <Route path="/favorites" Component={ Favorites } />
    </Routes>
  );
}

export default Routing;