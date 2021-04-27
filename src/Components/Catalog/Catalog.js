import React from "react";
import "./Catalog.scss";
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

function Catalog(props) {

  const { onAdd } = props;

  return (
    <Router>
      <div className="Catalog">
        <div className="CatalogHeader">
          <h2>Catalog</h2>
        </div>
        <div className="CatalogName">
          <Link to="/Quick-cart">
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
            <Route path="/Quick-cart">
              <AllCatalog onAdd={onAdd} />
            </Route>
            <Route path="/beautycatalog">
              <BeautyCatalog onAdd={onAdd} />
            </Route>
            <Route path="/foodcatalog">
              <FoodCatalog onAdd={onAdd} />
            </Route>
            <Route path="/shoppingcatalog">
              <ShoppingCatalog onAdd={onAdd} />
            </Route>
            <Route path="/travelcatalog">
              <TravelCatalog onAdd={onAdd} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Catalog;
