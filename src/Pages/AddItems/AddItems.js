import axios from 'axios';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './AddItems.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { toast } from 'react-toastify';

const AddItems = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [image, setImage] = useState('')
    const [supplier, setSupplier] = useState('')
    const [description, setDescription] = useState('')

    const data = { name, price, quantity, image, supplier, description, email: user?.email }


    const handleAddItem = (e) => {
        e.preventDefault()

// condition




        axios.post('/inventories', data)
            .then(res => {
                toast("post success");
                console.log(res.data)
            })


    }
    return (
        <div className="addNew py-5">
            <div className='container my-5'>
                <form className='p-4 addForm' onSubmit={handleAddItem}>
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
                                placeholder='enter product price'
                                className='form-control mb-3'
                                name="price"
                                id="price"

                            />
                            <input
                                type="number"
                                value={quantity}
                                onChange={e => setQuantity(e.target.value)}
                                placeholder='enter product quantity'
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
                                placeholder='enter product supplier'
                                className='form-control mb-3'
                                name="supplier"
                                id="supplier"

                            />
                            <input
                                type="text"
                                value={image}
                                onChange={e => setImage(e.target.value)}
                                placeholder='enter product image link'
                                className='form-control mb-3'
                                name="image"
                                id="image"

                            />
                        </Col>

                    </Row>
                    <textarea rows="5" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    <button className='animated-button mt-3' type="submit"> <span>add items</span> </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;