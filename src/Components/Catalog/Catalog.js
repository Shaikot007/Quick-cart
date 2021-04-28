import React from "react";
import "./Catalog.scss";
import { Button } from "reactstrap";
import Card from "./Card";

function Catalog(props) {

  const { catalog, setCatalog, onAdd } = props;

  return (
    <div className="Catalog">
      <div className="CatalogHeader">
        <h2>Catalog</h2>
      </div>
      <div className="CatalogName">
        <Button onClick={() => setCatalog("Home")}>Home</Button>
        <Button onClick={() => setCatalog("Beauty")}>Beauty</Button>
        <Button onClick={() => setCatalog("Food")}>Food</Button>
        <Button onClick={() => setCatalog("Shopping")}>Shopping</Button>
        <Button onClick={() => setCatalog("Travel")}>Travel</Button>
      </div>
      <div className="CatalogCards">
        <Card catalog={catalog} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default Catalog;
