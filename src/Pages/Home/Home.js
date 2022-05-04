import React, { useEffect, useState } from 'react';
import tarzen from '../../Images/laptop1.jpg'
import { Carousel, Row } from 'react-bootstrap';
import useCard from '../Card/Card';

import './Home.css';
import LoadItems from '../LoadItems/LoadItems';
import axios from 'axios';


const Home = () => {
    const [inventory, setInventory] = useState([])


    useEffect(() => {
        axios.get('/inventories')
            .then(res => setInventory(res.data))
    }, [])




    return (
        <div>
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 image"
                            src={tarzen}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 image"
                            src={tarzen}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 image"
                            src={tarzen}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='container'>
                <h1 className="text-center text-secondary fw-bold mt-5 ">
                    Total
                </h1>
                <div className="card-compo">
                    <Row xs={1} md={2} lg={3} className="g-4 mt-3 mb-5 align-items-stretch">
                        {inventory.map(item => <LoadItems key={item._id} product={item} />)}
                    </Row>
                </div>
            </div>


        </div >
    );
};

export default Home;