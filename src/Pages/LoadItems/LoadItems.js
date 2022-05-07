import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Col } from 'react-bootstrap';
import './LoadItems.css'

const LoadItems = ({ product }) => {
    const { description, supplier, name, quantity, image, price, _id } = product;
    return (
        <Col className='loadItems'>
            <Card className='h-100  '>
                <Card.Img variant="top" className='animated-img' src={image} />
                <Card.Body className=''>
                    <Card.Title className='fs-3 fw-bold text-info'><strong className=' text-secondary'> <strong className='text-secondary'>Name:</strong></strong> {name}</Card.Title>
                    <Card.Text className='text-secondary fs-5'>
                        <strong>Description:</strong> {description}
                    </Card.Text>
                    <p className='text-info fs-5 fw-bold'><strong className='text-secondary'>price:</strong> {price}</p>
                    <p className='fs-5 text-secondary'><strong>Supplier:</strong> {supplier}</p>
                    <p className="fw-bold text-info fs-5"><strong className='text-secondary'>Quantity:</strong> {parseInt(quantity) <= 0 ? "SoldOut" : quantity}</p>

                </Card.Body>
                <Link to={`/single_items/${_id}`} className='animated-button'><span>Manage Inventories</span></Link>
            </Card>
        </Col>
    );
};

export default LoadItems;