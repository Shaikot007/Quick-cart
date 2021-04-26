import React from "react";
import "./AllCatalog.css";
import Data from "../../Assets/db.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const result = Data.Data.filter(item => item.product_type === "Travel");

function TravelCatalog() {
  return (
    <div className="AllCatalog">
      {result.map(data =>
        <div className="CardBox" key={data.product_id}>
          <div className="CardBoxImage">
            <img src={data.product_image} alt="cart" />
          </div>
          <div className="CardBoxDescription">
            <div className="Description">
              <p>{data.product_name}</p>
              <p>$ {data.product_price}</p>
            </div>
            <div className="DescriptionButton">
              <FontAwesomeIcon className="Plus-circle" icon="plus-circle" size="lg" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelCatalog;
