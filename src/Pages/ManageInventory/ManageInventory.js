import React from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ManageInventory = () => {
    return (
        <div>
            <div className='container'>
                <Table striped bordered hover className='text-center fw-bold'>
                    <thead>
                        <tr className='fs-md-3 fs-5'>
                            <th>Name</th>
                            <th>Supplier</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='table-danger'>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td className='text-danger '><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon> </td>
                        </tr>

                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageInventory;