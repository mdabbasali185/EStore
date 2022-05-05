import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyItems = () => {

    const [myItems, setMyItems] = useState([])

    const token = localStorage.getItem('token')

    useEffect(() => {
        if (token) {
            axios.get('/my-items', {
                headers: {
                    Authorization: token
                }
            })
                .then(res => setMyItems(res.data))
        }

    }, [token])



    return (
        <div>
            <h6>hi {myItems.length} </h6>
        </div>
    );
};

export default MyItems;