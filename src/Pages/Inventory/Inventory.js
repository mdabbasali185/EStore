import React from 'react';
import { Row } from 'react-bootstrap';
import useCard from '../Card/Card';
import LoadItems from '../LoadItems/LoadItems';

const Inventory = () => {
    const [card, setCard] = useCard()
    return (
        <div className="card-compo">
            <Row xs={1} md={2} lg={3} className="g-4 my-5">
                {card.map(item => <LoadItems key={item._id} product={item} />)}
            </Row>
        </div>
    );
};

export default Inventory;