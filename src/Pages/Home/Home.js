import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import laptop1 from '../../Images/laptop1 (2).jpg';
import laptop2 from '../../Images/laptop2.jpg';
import laptop3 from '../../Images/laptop3.jpg';
import laotopWorld from '../../Images/laotopWorld.jpg';
import LoadItems from '../LoadItems/LoadItems';
import './Home.css';


const Home = () => {
    const [inventory, setInventory] = useState([])
    const [recent, setRecent] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        axios.get('/inventories?limit=6')
            .then(res => {
                setInventory(res.data)
                setLoading(false)
            })
    }, [loading])
    useEffect(() => {
        axios.get("/recent")
            .then(res => setRecent(res.data))
    }, [])


    if (loading) {
        return <div className='text-center d-flex align-items-center text-danger justify-content-center' style={{ height: '100vh' }}> <FontAwesomeIcon icon={faSpinner} className='fa-pulse fa-10x'></FontAwesomeIcon> </div>
    }


    return (
        <div>
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 image"
                            src={laptop1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>Designed with precision</h1>
                            <p>The quicker, the better.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 image"
                            src={laptop2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1>Made affordable for you</h1>
                            <p>Your office companion.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 image"
                            src={laptop3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1>IT experiences made better</h1>
                            <p>Let your fingers do the talking.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='card-compo py-5'>
                <div className='container '>
                    <h1 className="text-center text-info fw-bold mt-5 ">
                        Inventory Items
                    </h1>
                    <div>
                        <Row xs={1} md={2} lg={3} className="g-5 mt-3 mb-5 align-items-stretch">
                            {inventory.map(item => <LoadItems key={item._id} product={item} />)}
                        </Row>
                    </div>
                </div>
            </div>

            <div className='py-5'>
                <div className='container text-info bg-dark py-2 rounded text-center'>
                    <h1>This products is the trending Product to Sell in 2022.</h1>
                </div>
                <div className="banner">
                    <h1 className="custom-style ">THE BRANDS YOU KNOW & </h1>
                    <h1 className="custom-style "> NEW PRODUCTS YOU’LL LOVE</h1>
                </div>
            </div>


            {/* recent section */}
            <div className='bg-secondary py-5'>
                <h1 className='container text-info bg-dark py-2 rounded text-center'>Recent Products </h1>
                <Row xs={1} md={2} lg={3} className="g-4 container mx-auto">
                    {
                        recent.map(item => (



                            <Col key={item._id} className='container py-5'>
                                <Card className='h-100 '>

                                    <Card.Img variant="top" className='animated-img' src={item.image} />
                                    <Card.Body className=''>
                                        <Card.Title className='fs-3 fw-bold text-info'><strong className=' text-secondary'> <strong className='text-secondary'>Name:</strong></strong> {item.name}</Card.Title>
                                        <Card.Text className='text-secondary fs-5'>
                                            <strong>Description:</strong> {item.description}
                                        </Card.Text>
                                        <p className='text-info fs-5 fw-bold'><strong className='text-secondary'>price:</strong> {item.price}</p>
                                        <p className='fs-5 text-secondary'><strong>Supplier:</strong> {item.supplier}</p>
                                        <p className="fw-bold text-info fs-5"><strong className='text-secondary'>Quantity:</strong> {parseInt(item.quantity) <= 0 ? "SoldOut" : item.quantity}</p>


                                    </Card.Body>
                                </Card>
                            </Col>



                        ))
                    }
                </Row>

            </div>
        </div >
    );
};

export default Home;