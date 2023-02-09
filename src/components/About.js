import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container style={{backgroundColor:"cyan"}} >
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
		<h1 className="display-4">About Our Shopping Cart Application</h1>
            <p className="lead">
              Our shopping cart application is designed to make your shopping experience seamless and efficient. With a user-friendly interface, you can easily browse through products, add them to your cart, and make secure purchases in just a few clicks. 
            </p>
            <p className="lead">
              Our application uses the latest technology to ensure the security of your personal and financial information. All transactions are processed through secure payment gateways and your information is protected with top-level encryption. 
            </p>
            <p className="lead">
              We also offer a variety of delivery options to make sure you receive your products as quickly as possible. Our team is dedicated to providing you with exceptional customer service, and we're always here to help with any questions or concerns. 
            </p>
            <p className="lead">
              Thank you for choosing our shopping cart application. We hope you have a great shopping experience!
            </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
