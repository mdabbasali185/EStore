import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './AddItems.css'

const AddItems = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [image, setImage] = useState('')
    const [supplier, setSupplier] = useState('')



    return (
        <div className="addNew py-5">
            <div className='container my-5'>
            <form className='p-4 addForm'>
                <Row>
                    <Col lg={6}>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder='enter product name'
                            className='form-control mb-3'
                            name="name"
                            id="name"

                        />
                        <input
                            type="number"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            placeholder='enter product name'
                            className='form-control mb-3'
                            name="price"
                            id="price"

                        />
                        <input
                            type="number"
                            value={quantity}
                            onChange={e => setQuantity(e.target.value)}
                            placeholder='enter product name'
                            className='form-control mb-3'
                            name="quantity"
                            id="quantity"

                        />
                    </Col>
                    <Col lg={6}>
                        <input
                            type="text"
                            value={supplier}
                            onChange={e => setSupplier(e.target.value)}
                            placeholder='enter product name'
                            className='form-control mb-3'
                            name="supplier"
                            id="supplier"

                        />
                        <input
                            type="text"
                            value={image}
                            onChange={e=>setImage(e.target.value)}
                            placeholder='enter product name'
                            className='form-control mb-3'
                            name="image"
                            id="image"

                        />
                    </Col>

                </Row>
                <textarea rows="5" ></textarea>
                <button className='animated-button' type="submit"> <span>add items</span> </button>
            </form>
        </div>
        </div>
    );
};

export default AddItems;