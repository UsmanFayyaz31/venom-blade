import React, { useEffect, useState } from "react";
import Loader from "../../loader/Loader";
import { CATEGORY_API } from "../../services/constants";
import { getRequest } from "../../services/server";
import ProductsCards from "../common/ProductsCards";

const Category = (props) => {
  const [products, setProducts] = useState(null);
  const [categoryName, setCategoryName] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRequest(CATEGORY_API + props.match.params.id)
      .then((res) => {
        console.log("result", res);
        if (res.status === 200) {
          setCategoryName(res.data.category_name);
          setProducts(res.data.products);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <div className="page-content">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="home-content">
          {products && products.length >= 1 && (
            <>
              <h1 className="heading mt-4">{categoryName}</h1>

              <ProductsCards products={products} />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Category;
