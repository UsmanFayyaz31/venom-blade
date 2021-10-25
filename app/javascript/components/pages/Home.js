import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

import Slider from "../home/Slider";
import productImage from "../../../assets/images/product.JPG";
import productImage2 from "../../../assets/images/product2.jpg";
import productImage3 from "../../../assets/images/product3.jpg";
import productImage4 from "../../../assets/images/product4.jpg";

const products = [
  {
    id: 1,
    image: productImage,
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
    image: productImage2,
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
    image: productImage3,
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
    image: productImage4,
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
];

const Home = () => {
  return (
    <div className="page-content home">
      <Slider />

      <div className="home-content">
        <h1 className="heading mt-4">Trending Products</h1>
        <Row className="mt-4">
          {products.map((product, key) => (
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
                        src={product.image}
                        alt=""
                        width={170}
                        height={170}
                        className="img-fluid mx-auto d-block product-image"
                      />
                    </div>

                    <div className="text-center product-content">
                      <h5 className="product-name mb-1">{product.name}</h5>

                      <h5 className="mt-1 mb-0">
                        <span className="text-muted me-2">
                          <del>${product.oldPrice}</del>
                        </span>
                        <b>${product.newPrice}</b>
                      </h5>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
