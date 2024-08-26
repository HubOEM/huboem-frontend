import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the DocumentsTable component
function DocumentsTable({ documents }) {
    // Initialize state to hold documents data
    const [documentsData, setDocumentsData] = useState([]);
    // Initialize state to hold any error message
    const [error, setError] = useState(null);

    // Fetch data from the API endpoint using useEffect
    useEffect(() => {
        const fetchDocumentsData = async () => {
            try {
                // Make an API request to the v2/documents endpoint
                const response = await axios.get('https://huboem.dev/api/v1/documents', {
                    headers: {
                        'Authorization': 'eQMF5sBgBCjdvfc5ZmUxgZXa'
                    }
                });
                // Set the documents data from the API response
                setDocumentsData(response.data);
            } catch (error) {
                // Handle any errors that occur during the API request
                setError('Failed to fetch documents data.');
                console.error(error);
            }
        };

        // Call the fetchDocumentsData function to make the API request
        fetchDocumentsData();
    }, []);

    return (
        <div>
            <h2>Documents Table</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <table>
                <thead>
                    <tr>
                        <th>Document ID</th>
                        <th>Name</th>
                        <th>File URL</th>
                        <th>Group ID</th>
                        <th>Serial</th>
                        <th>Forge Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Display data from the documents prop */}
                    {documentsData.length > 0 ? (
                        documentsData.map((document) => (
                            <tr key={document.id}>
                                <td>{document.id}</td>
                                <td>{document.name}</td>
                                <td>
                                    {/* Display the file URL as a clickable link */}
                                    <a href={document.file_url} target="_blank" rel="noopener noreferrer">
                                        Open Document
                                    </a>
                                </td>
                                <td>{document.group_id}</td>
                                <td>{document.serial ? document.serial : 'N/A'}</td>
                                <td>{document.forge_status ? document.forge_status : 'N/A'}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No documents found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default DocumentsTable;
