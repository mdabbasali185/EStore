import React from 'react';
import { Card, Col } from 'react-bootstrap';

const LoadItems = ({ product }) => {
    const { description, supplier, name, quantity, image, price } = product;
    return (
        <Col>
            <Card className='h-100'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                        Description: {description}
                    </Card.Text>
                    <p>price: {price}</p>
                    <p>supplier: {supplier}</p>
                    <p className="fw-bold">Quantity:{quantity}</p>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default LoadItems;