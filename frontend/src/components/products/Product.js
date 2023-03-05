import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { product } = props;
  return (
    <Card className='my-3 py-3 px-1 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='p' className='my-3'>
          <Rating
            rating={product.rating}
            numberOfRatings={product.numOfRatings}
          />
        </Card.Text>
        <Card.Text as='h4'>&#8377; {product.sku[0].price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
