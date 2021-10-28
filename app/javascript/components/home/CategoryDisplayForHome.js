import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const CategoryDisplayForHome = (props) => {
  const { data } = props;

  return (
    <div className="home-content">
      {data.products && data.products.length >= 1 && (
        <>
          <h1 className="heading mt-4">{data.category_name}</h1>
          <Row className="mt-4" style={{ justifyContent: "center" }}>
            {data.products.map((product, key) => (
              <Col lg="3" sm="4" key={"_col_" + key}>
                <Card>
                  <CardBody className="product-card-body">
                    <div
                      className="product-box"
                      onClick={() =>
                        history.push(`/ecommerce-products/${product.id}`)
                      }
                    >
                      {product.islable ? (
                        <div className="product-ribbon badge bg-warning">
                          {product.lable}
                        </div>
                      ) : null}
                      {product.isOffer ? (
                        <div className="product-ribbon badge bg-danger">
                          {`-${product.offer}%`}
                        </div>
                      ) : null}
                      <div className="product-img">
                        <div className="product-wishlist">
                          <Link to="#">
                            <i className="mdi mdi-heart-outline"></i>
                          </Link>
                        </div>
                        <img
                          src={product.product_images[0]}
                          alt=""
                          width={170}
                          height={170}
                          className="img-fluid mx-auto d-block product-image"
                        />
                      </div>

                      <div className="text-center product-content">
                        <h3 className="product-name mb-2">
                          {product.product_name.charAt(0).toUpperCase() +
                            product.product_name.slice(1)}
                        </h3>

                        <h4 className="mt-2 mb-0">
                          {/* <span className="text-muted me-2">
                          <del>${product.oldPrice}</del>
                        </span> */}
                          <b>${product.price}</b>
                        </h4>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
};

export default CategoryDisplayForHome;
