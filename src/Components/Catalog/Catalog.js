import React from "react";
import "./Catalog.css";
import { Button } from "reactstrap";
import AllCatalog from "./AllCatalog";
import BeautyCatalog from "./BeautyCatalog";
import FoodCatalog from "./FoodCatalog";
import ShoppingCatalog from "./ShoppingCatalog";
import TravelCatalog from "./TravelCatalog";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Catalog() {
  return (
    <Router>
      <div className="Catalog">
        <div className="CatalogHeader">
          <h2>Catalog</h2>
        </div>
        <div className="CatalogName">
          <Link to="/">
            <Button>All</Button>
          </Link>
          <Link to="/beautycatalog">
            <Button>Beauty</Button>
          </Link>
          <Link to="/foodcatalog">
            <Button>Food</Button>
          </Link>
          <Link to="/shoppingcatalog">
            <Button>Shopping</Button>
          </Link>
          <Link to="/travelcatalog">
            <Button>Travel</Button>
          </Link>
        </div>
        <div className="CatalogCards">
          <Switch>
            <Route exact path="/">
              <AllCatalog />
            </Route>
            <Route path="/beautycatalog">
              <BeautyCatalog />
            </Route>
            <Route path="/foodcatalog">
              <FoodCatalog />
            </Route>
            <Route path="/shoppingcatalog">
              <ShoppingCatalog />
            </Route>
            <Route path="/travelcatalog">
              <TravelCatalog />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Catalog;
