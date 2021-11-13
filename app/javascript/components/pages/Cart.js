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
import DeleteIcon from "@material-ui/icons/Delete";
import { getRequest, postRequest } from "../../services/server";
import { CURRENT_USER, ORDERS } from "../../services/constants";

const Cart = () => {
  const [productList, setproductList] = useState(null);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getRequest(CURRENT_USER)
      .then((res) => {
        console.log("debugging user", res.data.user);
        setUser(res.data.user);
      })
      .catch((err) => {
        console.log("err", err);
      });

    var products = JSON.parse(localStorage.getItem("cart"));
    if (products) {
      products = products.data;
      if (products.length >= 1) setproductList(products);
    }
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
    var updatedProducts = productList.map((p) =>
      p.id === id ? { ...p, quantity: prev_data_attr + 1 } : p
    );
    setproductList(updatedProducts);
    localStorage.setItem("cart", JSON.stringify({ data: updatedProducts }));
  };

  const countDown = (id, prev_data_attr) => {
    if (prev_data_attr > 1) {
      var updatedProducts = productList.map((p) =>
        p.id === id ? { ...p, quantity: prev_data_attr - 1 } : p
      );
      setproductList(updatedProducts);
      localStorage.setItem("cart", JSON.stringify({ data: updatedProducts }));
    }
  };

  const deleteProduct = (idx) => {
    var temp = productList;
    temp.splice(idx, 1);
    setproductList(temp);
    localStorage.setItem("cart", JSON.stringify({ data: temp }));
  };

  const placeOrder = () => {
    productList.map((val, idx) => {
      postRequest(ORDERS, {
        order: {
          product_id: val.id,
          user_id: user.id,
          quantity: val.quantity,
        },
      })
        .then((res) => {
          console.log("Res", res);
        })
        .catch((err) => {
          console.log("err", err);
        });
    });
  };

  return (
    <div className="page-content cart-page">
      {!user && (
        <Row>
          <Col xs={12}>
            <Card>
              <CardBody>
                <h4>Login or SignUp to continue shopping</h4>
                <Link className="link-to-signin" to="/signin">
                  Click Here to Login
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}
      <Row>
        {productList && productList.length > 0 ? (
          <>
            <Col md="7">
              {productList.map((product, idx) => (
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
                              to={"/product/" + product.id}
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
                            <Link
                              to="#"
                              className="text-muted px-2"
                              onClick={() => deleteProduct(idx)}
                            >
                              <DeleteIcon />
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
                          <tr>
                            <td style={{ borderBottomWidth: "0px" }}>
                              <Button onClick={() => placeOrder()}>
                                Place Order
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </>
        ) : (
          <Col md="12">
            <Card>
              <CardBody>
                <h3>No items In Your Cart</h3>
                <Link to="/">
                  <h2
                    style={{
                      display: "inline-block",
                      color: "white",
                      marginTop: "15px",
                    }}
                  >
                    Click here to shop more
                  </h2>
                </Link>
              </CardBody>
            </Card>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Cart;
