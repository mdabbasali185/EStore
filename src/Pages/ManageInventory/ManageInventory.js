import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

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
        return <p> loading... </p>
      }

    return (
        <div>
            <div className='container'>
                <Table striped bordered hover className='text-center fw-bold'>
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
                                    <td>{inventory.name}</td>
                                    <td> {inventory.supplier}</td>
                                    <td>{inventory.price}</td>
                                    <td>{inventory.quantity}</td>
                                    <td onClick={() => deleteHandler(inventory._id)} className='text-danger '><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon> </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageInventory;