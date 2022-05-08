import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import './ManageInventory.css'

const ManageInventory = () => {
    const [inventories, setInventories] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        axios.get(`/inventories`)
            .then(res => {
                setInventories(res.data)
                setLoading(false)
            })
    }, [loading])

    const deleteHandler = (id) => {
        axios.delete(`/inventory/${id}`)
            .then(res => setLoading(true))
    }


    if (loading) {
        return <div className='text-center d-flex align-items-center text-danger justify-content-center' style={{ height: '100vh' }}> <FontAwesomeIcon icon={faSpinner} className='fa-pulse fa-10x'></FontAwesomeIcon> </div>
    }

    return (
        <div>
            <div className='table'>

                <div className='container'>
                    <Table striped bordered hover className='text-center fw-bold w-100'>
                        <thead>
                            <tr className='fs-md-3 fs-2 bg-info text-secondary'>
                                <th>Name</th>
                                <th>Supplier</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                inventories.map(inventory => (
                                    <tr key={inventory._id} className='table-danger'>
                                        <td attr='Name'>{inventory.name}</td>
                                        <td attr='Supplier'> {inventory.supplier}</td>
                                        <td attr='Price'>{inventory.price}</td>
                                        <td attr='quantity'>{inventory.quantity}</td>
                                        <td attr='Remove' onClick={() => deleteHandler(inventory._id)} className='text-danger'><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon> </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </Table>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;