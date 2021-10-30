import React, { useEffect, useState } from "react";
import { CATEGORY_API } from "../../services/constants";
import { getRequest } from "../../services/server";
import ProductsCards from "../common/ProductsCards";

const Category = (props) => {
  const [products, setProducts] = useState(null);
  const [categoryName, setCategoryName] = useState(null);

  useEffect(() => {
    console.log("debugging", props.match.params.id);
    getRequest(CATEGORY_API + props.match.params.id)
      .then((res) => {
        console.log("result", res);
        if (res.status === 200) {
          setCategoryName(res.data.category_name);
          setProducts(res.data.products);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <div className="page-content">
      <div className="home-content">
        {products && products.length >= 1 && (
          <>
            <h1 className="heading mt-4">{categoryName}</h1>

            <ProductsCards products={products} />
          </>
        )}
      </div>
    </div>
  );
};

export default Category;
