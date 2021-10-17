import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Input,
  Nav,
  NavItem,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap";
// import { isEmpty, map } from "lodash";
import tempImg from "../../../assets/images/product.JPG";

const products = [
  {
    id: 1,
    image: tempImg,
    name: "Nike N012 Shoes",
    link: "#",
    category: "Nike",
    currentcolor: "Gray",
    islable: true,
    lable: "Trending",
    oldPrice: 280,
    newPrice: 405,
    isOffer: false,
    offer: 0,
    reviews: 234,
    colors: ["dark", "light", "primary"],
    shortspecifications: [
      "High Quality",
      "Leather",
      "All Sizes available",
      "4 Different Color",
    ],
    decription:
      "If several languages coalesce, the grammar of the resulting language is more simple and regular",
    shortservices: [
      {
        icon: "exchange",
        value: "10 Days Replacement",
      },
      {
        icon: "bill",
        value: "Cash on Delivery available",
      },
    ],
    extraimgs: [
      "/static/media/img-2.1c8fac61.png",
      "/static/media/img-3.13e02027.png",
      "/static/media/img-4.ff280ca7.png",
    ],
    specification: [
      {
        type: "Category",
        value: "Shoes",
      },
      {
        type: "Brand",
        value: "Nike",
      },
      {
        type: "Color",
        value: "Gray",
      },
      {
        type: "Quality",
        value: "High",
      },
      {
        type: "Material",
        value: "Leather",
      },
    ],
    colorOptions: [
      {
        image: "/static/media/img-1.7d8658df.png",
        color: "Red",
      },
      {
        image: "/static/media/img-2.1c8fac61.png",
        color: "Dark",
      },
      {
        image: "/static/media/img-3.13e02027.png",
        color: "Purple",
      },
    ],
  },
  {
    id: 2,
    image: "/static/media/img-2.1c8fac61.png",
    name: "Adidas Running Shoes",
    link: "#",
    category: "Nike",
    currentcolor: "Black",
    islable: false,
    lable: "",
    oldPrice: 250,
    newPrice: 240,
    isOffer: true,
    offer: 20,
    colors: ["danger", "dark", "light"],
    reviews: 100,
    shortspecifications: [
      "High Quality",
      "Leather",
      "All Sizes available",
      "4 Different Color",
    ],
    decription:
      "If several languages coalesce, the grammar of the resulting language is more simple and regular",
    shortservices: [
      {
        icon: "exchange",
        value: "10 Days Replacement",
      },
      {
        icon: "bill",
        value: "Cash on Delivery available",
      },
    ],
    extraimgs: [
      "/static/media/img-1.7d8658df.png",
      "/static/media/img-3.13e02027.png",
      "/static/media/img-4.ff280ca7.png",
    ],
    specification: [
      {
        type: "Category",
        value: "Shoes",
      },
      {
        type: "Brand",
        value: "Nike",
      },
      {
        type: "Color",
        value: "Black",
      },
      {
        type: "Quality",
        value: "High",
      },
      {
        type: "Material",
        value: "Leather",
      },
    ],
    colorOptions: [
      {
        image: "/static/media/img-2.1c8fac61.png",
        color: "Red",
      },
      {
        image: "/static/media/img-4.ff280ca7.png",
        color: "Dark",
      },
      {
        image: "/static/media/img-3.13e02027.png",
        color: "Purple",
      },
    ],
  },
  {
    id: 3,
    image: "/static/media/img-3.13e02027.png",
    name: "Puma P103 Shoes",
    link: "#",
    category: "Nike",
    currentcolor: "Purple",
    islable: false,
    lable: "",
    oldPrice: 260,
    newPrice: 250,
    isOffer: false,
    offer: 0,
    colors: ["purple", "light", "dark"],
    reviews: 200,
    shortspecifications: [
      "High Quality",
      "Leather",
      "All Sizes available",
      "4 Different Color",
    ],
    decription:
      "If several languages coalesce, the grammar of the resulting language is more simple and regular",
    shortservices: [
      {
        icon: "exchange",
        value: "10 Days Replacement",
      },
      {
        icon: "bill",
        value: "Cash on Delivery available",
      },
    ],
    extraimgs: [
      "/static/media/img-1.7d8658df.png",
      "/static/media/img-2.1c8fac61.png",
      "/static/media/img-4.ff280ca7.png",
    ],
    specification: [
      {
        type: "Category",
        value: "Shoes",
      },
      {
        type: "Brand",
        value: "Nike",
      },
      {
        type: "Color",
        value: "Black",
      },
      {
        type: "Quality",
        value: "High",
      },
      {
        type: "Material",
        value: "Leather",
      },
    ],
    colorOptions: [
      {
        image: "/static/media/img-3.13e02027.png",
        color: "Red",
      },
      {
        image: "/static/media/img-4.ff280ca7.png",
        color: "Dark",
      },
      {
        image: "/static/media/img-1.7d8658df.png",
        color: "Purple",
      },
    ],
  },
  {
    id: 4,
    image: "/static/media/img-4.ff280ca7.png",
    name: "Sports S120 Shoes",
    link: "#",
    category: "Nike",
    currentcolor: "Cyan",
    islable: false,
    lable: "",
    oldPrice: 240,
    newPrice: 230,
    isOffer: false,
    offer: 0,
    colors: ["info", "success"],
    reviews: 150,
    shortspecifications: [
      "High Quality",
      "Leather",
      "All Sizes available",
      "4 Different Color",
    ],
    decription:
      "If several languages coalesce, the grammar of the resulting language is more simple and regular",
    shortservices: [
      {
        icon: "exchange",
        value: "10 Days Replacement",
      },
      {
        icon: "bill",
        value: "Cash on Delivery available",
      },
    ],
    extraimgs: [
      "/static/media/img-1.7d8658df.png",
      "/static/media/img-2.1c8fac61.png",
      "/static/media/img-3.13e02027.png",
    ],
    specification: [
      {
        type: "Category",
        value: "Shoes",
      },
      {
        type: "Brand",
        value: "Nike",
      },
      {
        type: "Color",
        value: "Cyan",
      },
      {
        type: "Quality",
        value: "High",
      },
      {
        type: "Material",
        value: "Leather",
      },
    ],
    colorOptions: [
      {
        image: "/static/media/img-4.ff280ca7.png",
        color: "Red",
      },
      {
        image: "/static/media/img-1.7d8658df.png",
        color: "Dark",
      },
      {
        image: "/static/media/img-2.1c8fac61.png",
        color: "Purple",
      },
    ],
  },
  {
    id: 5,
    image: "/static/media/img-5.7524c50a.png",
    name: "Adidas AB23 Shoes",
    link: "#",
    category: "Nike",
    currentcolor: "Blue",
    islable: false,
    lable: "",
    oldPrice: 240,
    newPrice: 250,
    isOffer: false,
    offer: 0,
    colors: ["dark", "light", "primary"],
    reviews: 170,
    shortspecifications: [
      "High Quality",
      "Leather",
      "All Sizes available",
      "4 Different Color",
    ],
    decription:
      "If several languages coalesce, the grammar of the resulting language is more simple and regular",
    shortservices: [
      {
        icon: "exchange",
        value: "10 Days Replacement",
      },
      {
        icon: "bill",
        value: "Cash on Delivery available",
      },
    ],
    extraimgs: [
      "/static/media/img-5.7524c50a.png",
      "/static/media/img-2.1c8fac61.png",
      "/static/media/img-3.13e02027.png",
    ],
    specification: [
      {
        type: "Category",
        value: "Shoes",
      },
      {
        type: "Brand",
        value: "Nike",
      },
      {
        type: "Color",
        value: "Blue",
      },
      {
        type: "Quality",
        value: "High",
      },
      {
        type: "Material",
        value: "Leather",
      },
    ],
    colorOptions: [
      {
        image: "/static/media/img-5.7524c50a.png",
        color: "Red",
      },
      {
        image: "/static/media/img-2.1c8fac61.png",
        color: "Dark",
      },
      {
        image: "/static/media/img-3.13e02027.png",
        color: "Purple",
      },
    ],
  },
  {
    id: 6,
    image: "/static/media/img-6.8d6e5eec.png",
    name: "Nike N012 Shoes",
    link: "#",
    category: "Nike",
    currentcolor: "Gray",
    islable: false,
    lable: "",
    oldPrice: 270,
    newPrice: 260,
    isOffer: true,
    offer: 20,
    colors: ["dark", "light"],
    reviews: 80,
    shortspecifications: [
      "High Quality",
      "Leather",
      "All Sizes available",
      "4 Different Color",
    ],
    decription:
      "If several languages coalesce, the grammar of the resulting language is more simple and regular",
    shortservices: [
      {
        icon: "exchange",
        value: "10 Days Replacement",
      },
      {
        icon: "bill",
        value: "Cash on Delivery available",
      },
    ],
    extraimgs: [
      "/static/media/img-6.8d6e5eec.png",
      "/static/media/img-4.ff280ca7.png",
      "/static/media/img-3.13e02027.png",
    ],
    specification: [
      {
        type: "Category",
        value: "Shoes",
      },
      {
        type: "Brand",
        value: "Nike",
      },
      {
        type: "Color",
        value: "Gray",
      },
      {
        type: "Quality",
        value: "High",
      },
      {
        type: "Material",
        value: "Leather",
      },
    ],
    colorOptions: [
      {
        image: "/static/media/img-6.8d6e5eec.png",
        color: "Red",
      },
      {
        image: "/static/media/img-4.ff280ca7.png",
        color: "Dark",
      },
      {
        image: "/static/media/img-3.13e02027.png",
        color: "Purple",
      },
    ],
  },
];

const Home = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(5);

  return (
    <div className="page-content">
      
      <Row>
        <Col lg="12">
          <div>
            <Row>
              {products.map((product, key) => (
                <Col lg="4" sm="6" key={"_col_" + key}>
                  <Card>
                    <CardBody className="background-color">
                      <div
                        className="product-box"
                        onClick={() =>
                          history.push(`/ecommerce-products/${product.id}`)
                        }
                      >
                        <div className="product-img pt-4 px-4">
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
                          <div className="product-wishlist">
                            <Link to="#">
                              <i className="mdi mdi-heart-outline"></i>
                            </Link>
                          </div>
                          <img
                            src={product.image}
                            alt=""
                            className="img-fluid mx-auto d-block product-image"
                          />
                        </div>

                        <div className="text-center product-content p-4">
                          <h5 className="mb-1">
                            <Link
                              to={"/ecommerce-product-detail/" + product.id}
                              className="text-dark"
                            >
                              {product.name}{" "}
                            </Link>
                          </h5>
                          <p className="text-muted font-size-13">
                            {product.currentcolor}, Shoes
                          </p>

                          <h5 className="mt-3 mb-0">
                            <span className="text-muted me-2">
                              <del>${product.oldPrice}</del>
                            </span>
                            <b>${product.newPrice}</b>
                          </h5>

                          <ul className="list-inline mb-0 text-muted product-color">
                            <li className="list-inline-item">Colors :</li>
                            {/* {!isEmpty(product.colors) &&
                              product.colors.map((pcolor, colorkey) => (
                                <React.Fragment
                                  key={key + "_color_" + colorkey}
                                >
                                  <li className="list-inline-item">
                                    <i
                                      className={
                                        "mdi mdi-circle text-" + pcolor
                                      }
                                    ></i>
                                  </li>
                                </React.Fragment>
                              ))} */}
                          </ul>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
            <Row className="mt-4">
              <Col sm="6">
                <div>
                  <p className="mb-sm-0">Page 2 of 84</p>
                </div>
              </Col>
              <Col sm="6">
                <div className="float-sm-end">
                  <Pagination className="pagination pagination-rounded mb-sm-0">
                    <PaginationItem disabled={page === 1}>
                      <PaginationLink
                        previous
                        to="#"
                        onClick={() => handlePageClick(page - 1)}
                      />
                    </PaginationItem>
                    {/* {map(Array(totalPage), (item, i) => (
                          <PaginationItem
                            active={i + 1 === page}
                            key={"_pagination_" + i}
                          >
                            <PaginationLink
                              onClick={() => handlePageClick(i + 1)}
                              to="#"
                            >
                              {i + 1}
                            </PaginationLink>
                          </PaginationItem>
                        ))} */}
                    <PaginationItem disabled={page === totalPage}>
                      <PaginationLink
                        next
                        to="#"
                        onClick={() => handlePageClick(page + 1)}
                      />
                    </PaginationItem>
                  </Pagination>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
