import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    // let url = 'http://localhost:4000/products';
    let url =
      'https://my-json-server.typicode.com/Luna-SWE/HnMCloneCoding/products';
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col xs={12} sm={6} md={3} key={menu.id}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
