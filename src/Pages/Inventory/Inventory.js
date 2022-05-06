import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import LoadItems from '../LoadItems/LoadItems';

const Inventory = () => {
    const [card, setCard] = useState([])
    useEffect(() => {
        axios.get('/inventories')
            .then(res => setCard(res.data))
    }, [])
    return (
        <div className="card-compo">
            <div className="container">
                <div>
                    <Row xs={1} md={2} lg={3} className="g-5 my-5">
                        {card.map(item => <LoadItems key={item._id} product={item} />)}
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Inventory;