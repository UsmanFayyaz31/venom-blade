import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  InputGroup,
  InputGroupAddon,
  Row,
  Table,
  Button,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  const [productList, setproductList] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setproductList(JSON.parse(localStorage.getItem("cart")).data);
  }, []);

  useEffect(() => {
    if (productList) {
      var sum = 0;
      productList.map((val) => {
        sum = sum + val.price * val.quantity;
      });

      setTotal(sum);
    }
  }, [productList]);

  const countUP = (id, prev_data_attr) => {
    setproductList(
      productList.map((p) =>
        p.id === id ? { ...p, quantity: prev_data_attr + 1 } : p
      )
    );
  };

  const countDown = (id, prev_data_attr) => {
    if (prev_data_attr > 1)
      setproductList(
        productList.map((p) =>
          p.id === id ? { ...p, quantity: prev_data_attr - 1 } : p
        )
      );
  };

  return (
    <div className="page-content cart-page">
      <Row>
        <Col md="7">
          {productList &&
            productList.map((product) => (
              <Card className="border shadow-none" key={product.id}>
                <CardBody>
                  <div className="d-flex border-bottom pb-3">
                    <div className="me-4">
                      <img
                        src={product.product_images[0]}
                        alt=""
                        className="avatar-lg"
                      />
                    </div>
                    <div className="flex-1 align-self-center overflow-hidden">
                      <div>
                        <h5 className="text-truncate font-size-16">
                          <Link
                            to={"/ecommerce-product-detail/" + product.id}
                            className="text-light"
                          >
                            {product.product_name}
                          </Link>
                        </h5>
                      </div>
                    </div>
                    <div className="ml-2">
                      <ul className="list-inline mb-0 font-size-16">
                        <li className="list-inline-item">
                          <Link to="#" className="text-muted px-2">
                            <i className="uil uil-trash-alt"></i>
                          </Link>{" "}
                        </li>{" "}
                        <li className="list-inline-item">
                          <Link to="#" className="text-muted px-2">
                            <i className="uil uil-heart"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div
                      className="row"
                      style={{ textAlign: "center", alignItems: "center" }}
                    >
                      <div className="col-sm-4 col-6">
                        <div className="mt-3">
                          <p className="text-muted mb-2">Price</p>
                          <h5 className="font-size-16 text-light">
                            ${product.price}
                          </h5>
                        </div>
                      </div>
                      <div className="col-sm-4 col-6">
                        <div className="mt-3">
                          <p className="text-muted mb-2">Quantity</p>
                          <div style={{ width: "110px", margin: "auto" }}>
                            <InputGroup>
                              <InputGroupAddon addonType="append">
                                <Button
                                  color="primary"
                                  onClick={() => {
                                    countDown(product.id, product.quantity);
                                  }}
                                >
                                  -
                                </Button>
                              </InputGroupAddon>
                              <Input
                                type="text"
                                value={product.quantity}
                                name="demo_vertical"
                                style={{ textAlign: "center" }}
                                readOnly
                              />
                              <InputGroupAddon addonType="prepend">
                                <Button
                                  color="primary"
                                  onClick={() => {
                                    countUP(product.id, product.quantity);
                                  }}
                                >
                                  +
                                </Button>
                              </InputGroupAddon>
                            </InputGroup>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="mt-3">
                          <p className="text-muted mb-2">Total</p>
                          <h5 className="font-size-16 text-light">
                            ${product.quantity * product.price}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
        </Col>
        <Col md="5">
          <div className="mt-5 mt-lg-0">
            <Card className="border shadow-none">
              <div className="card-header bg-transparent border-bottom py-3 px-4">
                <h5 className="font-size-16 mb-0">Order Summary</h5>
              </div>
              <CardBody className="p-4">
                <div className="table-responsive">
                  <Table className="table mb-0" style={{ color: "white" }}>
                    <tbody>
                      {productList &&
                        productList.map((val, idx) => {
                          return (
                            <tr key={idx}>
                              <td>{val.product_name}</td>
                              <td className="text-end">
                                $ {val.price * val.quantity}
                              </td>
                            </tr>
                          );
                        })}
                      <tr className="bg-light text-dark">
                        <th>Total :</th>
                        <td className="text-end">
                          <span className="fw-bold">$ {total}</span>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
