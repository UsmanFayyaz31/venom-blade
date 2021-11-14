import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  Input,
  TabPane,
  Table,
} from "reactstrap";
import classnames from "classnames";
import { useHistory } from "react-router";

import { CART_PAGE, PRODUCT_API } from "../../services/constants";
import { getRequest } from "../../services/server";

const ProductDetails = (props) => {
  const history = useHistory();

  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("1");
  const [activeDescriptionTab, setDescriptionActiveTab] =
    useState("description");

  useEffect(() => {
    getRequest(PRODUCT_API + props.match.params.id)
      .then((res) => {
        console.log("result", res);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const toggledescription = (tab) => {
    if (activeDescriptionTab !== tab) {
      setDescriptionActiveTab(tab);
    }
  };

  const imageShow = (img, id) => {
    const expandImg = document.getElementById("expandedImg" + id);
    expandImg.src = img;
  };

  const addDataToLocalStorage = () => {
    var exsistingItem = JSON.parse(localStorage.getItem("cart"));

    var isRepeat = false;

    if (exsistingItem && exsistingItem.data.length >= 1) {
      for (var i = 0; i < exsistingItem.data.length; i++) {
        // exsistingItem.data.map((val, idx) => {
        if (exsistingItem.data[i].id === product.id) {
          exsistingItem.data[i].quantity = exsistingItem.data[i].quantity + 1;
          localStorage.setItem("cart", JSON.stringify(exsistingItem));
          window.dispatchEvent(new Event("storage"));
          isRepeat = true;
          break;
        }
      }
      // });

      if (!isRepeat) {
        var temp = product;
        temp.quantity = 1;
        exsistingItem.data.push(temp);
        localStorage.setItem("cart", JSON.stringify(exsistingItem));
        window.dispatchEvent(new Event("storage"));
      }
    } else {
      var temp = product;
      temp.quantity = 1;
      localStorage.setItem("cart", JSON.stringify({ data: [temp] }));
      window.dispatchEvent(new Event("storage"));
    }
  };

  const handleBuyNow = () => {
    addDataToLocalStorage();

    history.push(CART_PAGE);
  };

  return (
    <div className="page-content">
      <Container fluid>
        {product && (
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody className="product-detail-card">
                  <Row>
                    <Col xl="8">
                      <div className="product-detail">
                        <Row>
                          {product.product_images.length >= 2 && (
                            <Col xs="5" sm="3">
                              <Nav className="flex-column" pills>
                                {product.product_images.map((val, idx) => {
                                  return (
                                    <NavItem key={idx}>
                                      <NavLink
                                        className={classnames({
                                          active: activeTab === "1",
                                        })}
                                        onClick={() => {
                                          toggleTab("1");
                                        }}
                                      >
                                        <img
                                          src={val}
                                          alt=""
                                          onClick={() => {
                                            imageShow(val, 1);
                                          }}
                                          className="img-fluid mx-auto d-block tab-img rounded"
                                        />
                                      </NavLink>
                                    </NavItem>
                                  );
                                })}
                              </Nav>
                            </Col>
                          )}
                          <Col>
                            <TabContent
                              activeTab={activeTab}
                              className="position-relative"
                              style={{ paddingTop: "0px" }}
                            >
                              <TabPane tabId="1">
                                <div className="product-img">
                                  <img
                                    src={product.product_images[0]}
                                    alt=""
                                    id="expandedImg1"
                                    className="img-fluid mx-auto d-block"
                                  />
                                </div>
                              </TabPane>
                              <TabPane tabId="2">
                                <div className="product-img">
                                  <img
                                    src={product.image}
                                    id="expandedImg2"
                                    alt=""
                                    className="img-fluid mx-auto d-block"
                                  />
                                </div>
                              </TabPane>
                              <TabPane tabId="3">
                                <div className="product-img">
                                  <img
                                    src={product.image}
                                    id="expandedImg3"
                                    alt=""
                                    className="img-fluid mx-auto d-block"
                                  />
                                </div>
                              </TabPane>
                              <TabPane tabId="4">
                                <div className="product-img">
                                  <img
                                    src={product.image}
                                    id="expandedImg4"
                                    alt=""
                                    className="img-fluid mx-auto d-block"
                                  />
                                </div>
                              </TabPane>
                            </TabContent>
                            <Row className="text-center mt-2">
                              <div className="col-sm-6 d-grid">
                                <Button
                                  type="button"
                                  color="primary"
                                  className="btn-block waves-effect waves-light mt-2 me-1"
                                  onClick={() => addDataToLocalStorage()}
                                >
                                  <i className="uil uil-shopping-cart-alt me-2"></i>{" "}
                                  Add to cart
                                </Button>
                              </div>
                              <div className="col-sm-6 d-grid">
                                <Button
                                  type="button"
                                  color="light"
                                  className="btn-block waves-effect mt-2 waves-light buy-now-button"
                                  onClick={() => handleBuyNow()}
                                >
                                  <i className="uil uil-shopping-basket me-2"></i>
                                  Buy now
                                </Button>
                              </div>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                    </Col>

                    <Col xl="4">
                      <div className="mt-4 mt-xl-3 ps-xl-4">
                        <h1 style={{ color: "white", textAlign: "center" }}>
                          {product.product_name}
                        </h1>

                        <h3 className="mt-1" style={{ textAlign: "center" }}>
                          {/* <del className="text-muted me-2">
                            ${product.oldPrice}
                          </del> */}
                          Price: ${product.price}
                          <span className="text-danger font-size-14 ms-2">
                            {!!product.isOffer && (
                              <h6 className="text-success text-uppercase">
                                {product.offer} % Off
                              </h6>
                            )}
                          </span>
                        </h3>

                        <div className="mt-5">
                          <h3 style={{ color: "white" }}>
                            Product Description:
                          </h3>
                          <p style={{ marginLeft: "10px", color: "#757474" }}>
                            {product.product_description}
                          </p>
                          <h3 className="mt-4" style={{ color: "white" }}>
                            Specification:
                          </h3>
                          <table
                            className="table-nowrap mb-0"
                            style={{
                              width: "60%",
                              borderCollapse: "separate",
                              borderSpacing: "8px",
                            }}
                          >
                            <tbody>
                              <tr>
                                <th>Full Length:</th>
                                <td>{product.full_length}</td>
                              </tr>
                              <tr>
                                <th>Blade Length:</th>
                                <td>{product.blade_length}</td>
                              </tr>
                              <tr>
                                <th>Handle Length:</th>
                                <td>{product.handle_length}</td>
                              </tr>
                              <tr>
                                <th>Material:</th>
                                <td>{product.material}</td>
                              </tr>
                              <tr>
                                <th>Sheath:</th>
                                <td>
                                  <input
                                    type="checkbox"
                                    checked={product.sheath}
                                    onChange={() => {}}
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  {/* <Reviews comments={product.comments} /> */}
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ProductDetails;
