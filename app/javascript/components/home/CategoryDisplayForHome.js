import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import ProductsCards from "../common/ProductsCards";

const CategoryDisplayForHome = (props) => {
  const { data } = props;

  return (
    <div className="home-content">
      {data.products && data.products.length >= 1 && (
        <>
          <Link to={`/category/${data.id}`}>
            <h1 className="heading mt-4">{data.category_name}</h1>
          </Link>

          <ProductsCards products={data.products} />
        </>
      )}
    </div>
  );
};

export default CategoryDisplayForHome;
