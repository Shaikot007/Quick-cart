import React from "react";
import "./Card.scss";
import Data from "../../Assets/db.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card(props) {

  const { catalog, onAdd } = props;
  const productData = Data.Data;
  const filteredData = productData.filter(data => data.product_type === catalog);

  return (
    <div className="Card">
      {filteredData.length === 0 ? productData.map(data =>
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
              <FontAwesomeIcon className="Plus-circle" icon="plus-circle" size="lg" onClick={() => onAdd(data)} />
            </div>
          </div>
        </div>
      ) :
        filteredData.map(data =>
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
                <FontAwesomeIcon className="Plus-circle" icon="plus-circle" size="lg" onClick={() => onAdd(data)} />
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Card;
