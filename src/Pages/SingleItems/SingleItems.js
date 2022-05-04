import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleItems = () => {
    const { id } = useParams()
    const [item, setItem] = useState({})
    const { description, supplier, name, quantity, image, price } = item;

    useEffect(() => {
        axios.get(`/inventory/${id}`)
            .then(res => setItem(res.data))
    }, [id])
    return (
        <div className='container py-5'>
            <div className="card mb-3 w-75 mx-auto">
                <div className="row g-0 ">
                    <div className="col-md-4 col-lg-4  align-items-stretch d-flex">
                        <img src={image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 col-lg-8">
                        <div className="card-body">
                            <h5 className="card-title fs-3 text-info"><strong className='text-secondary'>Name:</strong> {name}</h5>
                            <p className="card-text fs-4 text-secondary"><strong>Description:</strong> {description}</p>
                            <p className="card-text fs-4 text-secondary"><strong>Supplier:</strong> {supplier}</p>
                            <p className="card-text fs-4 text-secondary"><strong>Quantity:</strong> {quantity}</p>
                            <p className="card-text fs-4 text-info fw-bold"><strong className='text-secondary'>Price:</strong> {price}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleItems;