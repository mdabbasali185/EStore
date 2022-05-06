import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyItems = () => {

    const [myItems, setMyItems] = useState([])


    const token = localStorage.getItem('token')

    useEffect(() => {
        if (token) {
            axios.get('/my-items', {
                headers: {
                    Authorization: token
                }
            })
                .then(res => setMyItems(res.data))
        }

    }, [token])



    return (
        // <div>
        //     <h6>hi {myItems.length} </h6>
        // </div>
        <div className='card-compo py-5'>
            <div className='container '>
                <h1 className="text-center text-secondary fw-bold mt-5 ">
                    Total
                </h1>
                <div className="">
                    <Row xs={1} md={2} lg={3} className="g-5 mt-3 mb-5 align-items-stretch">
                        {myItems.map(myItem => (
                            <Col>
                                <Card className='h-100'>
                                    <Card.Img variant="top" className='animated-img' src={myItem.image} />
                                    <Card.Body className='text-center'>
                                        <Card.Title className='fs-3 fw-bold text-info'><strong className=' text-secondary'> <strong className='text-secondary'>Name:</strong></strong> {myItem.name}</Card.Title>
                                        <Card.Text className='text-secondary fs-5'>
                                            <strong>Description:</strong> {myItem.description}
                                        </Card.Text>
                                        <p className='text-info fs-5 fw-bold'><strong className='text-secondary'>price:</strong> {myItem.price}</p>
                                        <p className='fs-5 text-secondary'><strong>supplier:</strong> {myItem.supplier}</p>
                                        <p className="fw-bold">Quantity:{
                                            myItem.quantity < 0 ? myItem.quantity : "SoldOut"}</p>
                                        <Link to={`/single_items/${myItem._id}`} className='animated-button'><span>Manage Inventories</span></Link>

                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}

                    </Row>
                </div>
            </div>
        </div>
    );
};

export default MyItems;