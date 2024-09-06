import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../../services/sessionService.js';

function PartsTable() {
    const [partsData, setPartsData] = useState([]);
    const [error, setError] = useState(null);

    const token = getToken();
    console.log('token from local storage:', token);
    console.log('eQMF5sBgBCjdvfc5ZmUxgZXa');

    useEffect(() => {
        const fetchPartsData = async () => {
            try {
                const response = await axios.get('https://huboem.dev/api/v2/parts', {
                    headers: {
                        'Authorization': token
                    }
                });
                setPartsData(response.data);
            } catch (error) {
                setError('Failed to fetch parts data.');
                console.error(error);
            }
        };

        fetchPartsData();
    }, []);

    const handleDelete = async (partId) => {
        try {
            // Send DELETE request to the server with the part ID
            const response = await axios.delete(`https://huboem.dev/api/v2/parts/${partId}`, {
                headers: {
                    'Authorization': token
                }
            });

            // Check if the response status is not in the 2XX range
            if (response.status < 200 || response.status >= 300) {
                setError(`Failed to delete part. Server responded with status: ${response.status}`);
                return;
            }

            // Update the partsData state to remove the deleted part
            setPartsData(partsData.filter((part) => part.id !== partId));
        } catch (error) {
            // Provide detailed error handling and logging
            if (error.response) {
                // Server responded with a status other than 2XX
                console.error(`Failed to delete part. Server responded with status: ${error.response.status} and data: ${error.response.data}`);
                setError(`Failed to delete part. Server error: ${error.response.data}`);
            } else if (error.request) {
                // No response from server
                console.error('No response received from server. Request data:', error.request);
                setError('Failed to delete part. No response received from server.');
            } else {
                // Other errors (e.g., setup or network errors)
                console.error('Error occurred while deleting part:', error.message);
                setError(`Failed to delete part. Error: ${error.message}`);
            }
        }
    };


    return (
        <>
            <div>
                <h1>Parts Table</h1>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Cost</th>
                            <th>Time to Service</th>
                            <th>Warranty Duration</th>
                            <th>Recommended Stock</th>
                            <th>Order Price Per Unit</th>
                            <th>Order Shipping Per Unit</th>
                            <th>Order Min Quantity</th>
                            <th>Order Delivery Time</th>
                            <th>Order Lead Time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {partsData.length > 0 ? (
                            partsData.map((part) => (
                                <tr key={part.id}>
                                    <td>{part.name}</td>
                                    <td>{part.description}</td>
                                    <td>{part.priority}</td>
                                    <td>{part.cost}</td>
                                    <td>{part.time_to_service}</td>
                                    <td>{part.warranty_duration}</td>
                                    <td>{part.recommended_stock}</td>
                                    <td>{part.order_price_per_unit}</td>
                                    <td>{part.order_shipping_per_unit}</td>
                                    <td>{part.order_min_quantity}</td>
                                    <td>{part.order_delivery_time}</td>
                                    <td>{part.order_lead_time}</td>
                                    <td>
                                        <button onClick={() => handleDelete(part.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="21">No parts found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default PartsTable;



// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchParts, deletePartsRequest as deletePart } from '../../actions/partActions'; // Changed import statement

// function PartsTable() {
//     const partsData = useSelector(state => state.partReducer.partsData);
//     const error = useSelector(state => state.partReducer.error);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(fetchParts());
//     }, [dispatch]);

//     const handleDelete = async (partId) => {
//         try {
//             dispatch(deletePart(partId)); // Changed function call
//         } catch (error) {
//             // Handle error
//         }
//     };

//     return (
//         <div>
//             <h1>Parts Table</h1>
//             {error && <div style={{ color: 'red' }}>{error}</div>}
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Description</th>
//                         <th>Priority</th>
//                         <th>Cost</th>
//                         <th>Time to Service</th>
//                         <th>Warranty Duration</th>
//                         <th>Recommended Stock</th>
//                         <th>Order Price Per Unit</th>
//                         <th>Order Shipping Per Unit</th>
//                         <th>Order Min Quantity</th>
//                         <th>Order Delivery Time</th>
//                         <th>Order Lead Time</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {partsData.length > 0 ? (
//                         partsData.map((part) => (
//                             <tr key={part.id}>
//                                 <td>{part.name}</td>
//                                 <td>{part.description}</td>
//                                 <td>{part.priority}</td>
//                                 <td>{part.cost}</td>
//                                 <td>{part.time_to_service}</td>
//                                 <td>{part.warranty_duration}</td>
//                                 <td>{part.recommended_stock}</td>
//                                 <td>{part.order_price_per_unit}</td>
//                                 <td>{part.order_shipping_per_unit}</td>
//                                 <td>{part.order_min_quantity}</td>
//                                 <td>{part.order_delivery_time}</td>
//                                 <td>{part.order_lead_time}</td>
//                                 <td>
//                                     <button onClick={() => handleDelete(part.id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="21">No parts found</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default PartsTable;
