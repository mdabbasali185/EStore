import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const SingleItems = () => {
    const { id } = useParams()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const { description, supplier, name, quantity, image, price } = item;

    useEffect(() => {
        axios.get(`/inventory/${id}`)
            .then(res => {
                setItem(res.data)
                setLoading(false)
            })
    }, [id, loading])


    // update quantity -1
    const updateHandler = () => {
        if (quantity > 0) {
            const updatedQuantity = parseInt(quantity) - 1
            console.log(updatedQuantity);


            axios.put(`http://localhost:5000/inventory/${id}`, { updatedQuantity })
                .then(res => setLoading(true))
        } else {

            toast.info("you have not any item to delivered ", { theme: 'colored' });

        }
    }


    if (loading) {
        return <div className='text-center d-flex align-items-center text-danger justify-content-center' style={{ height: '100vh' }}> <FontAwesomeIcon icon={faSpinner} className='fa-pulse fa-10x'></FontAwesomeIcon> </div>
    }




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


                            <button className="btn btn-primary" onClick={updateHandler} > delivered </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleItems;