import React, { useState } from 'react';
import BulkUpload from './BulkUpload';
import { parseExcelFile } from './parseExcelFile';



const MachineInfo = () => {
    const [activeTab, setActiveTab] = useState('Orders');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    // Define function to handle the uploaded file and parsed data
    const handleBulkUpload = (file) => {
        // Handle the uploaded file, e.g., parse and process the data
        parseExcelFile(file, handleParsedData);
    };

    const handleParsedData = (parsedData) => {
        // Handle the parsed data, e.g., update state or send to server
        console.log("Parsed Data:", parsedData);
    };

    const orders = [
        {
            id: 1,
            companyName: "ABC Company",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            amount: 1000,
            date: "2024-04-04",
            status: "delivered"
        },
        {
            id: 2,
            companyName: "XYZ Corporation",
            description: "Sed do eiusmod tempor incididunt ut lae magna aliqua.",
            amount: 1500,
            date: "2024-04-03",
            status: "in route"
        },
        {
            id: 3,
            companyName: "123 Inc.",
            description: "Ut enim ad minim veniam, quiquip commodo consequat.",
            amount: 2000,
            date: "2024-04-02",
            status: "processing"
        }
    ];

    const serviceRequests = [
        {
            id: 1,
            companyName: "ABC Company",
            description: "Lorem ipsum dolor ng elit.",
            amount: 500,
            date: "2024-04-04",
            status: "delivered"
        },
        {
            id: 2,
            companyName: "XYZ Corporation",
            description: "Sed do eiusmod tet dolore magna aliqua.",
            amount: 750,
            date: "2024-04-03",
            status: "in route"
        },
        {
            id: 3,
            companyName: "123 Inc.",
            description: "Ut enim ad minex ea commodo consequat.",
            amount: 1000,
            date: "2024-04-02",
            status: "processing"
        }
    ];

    const parts = [
        {
            id: 1,
            name: "Machine A",
            number: "Submodel 1",
            description: "Description A",
            href: "/part{id}"
        },
        {
            id: 2,
            name: "Machine B",
            number: "Submodel 2",
            description: "Description B",
            href: "/part{id}"
        },
        {
            id: 3,
            name: "Machine C",
            number: "Submodel 3",
            description: "Description C",
            href: "/part{id}"
        }
    ];

    const customers = [
        {
            id: 1,
            companyName: "ABC Company",
            pointOfContact: "John Doe",
            email: "john.doe@example.com",
            phoneNumber: "123-456-7890"
        },
        {
            id: 2,
            companyName: "XYZ Corporation",
            pointOfContact: "Jane Smith",
            email: "jane.smith@example.com",
            phoneNumber: "987-654-3210"
        },
        {
            id: 3,
            companyName: "123 Inc.",
            pointOfContact: "Alice Johnson",
            email: "alice.johnson@example.com",
            phoneNumber: "555-555-5555"
        }
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Orders':
                return (
                    <div>
                        {/* Orders Table */}
                        {/* <h2 className="text-lg font-bold mb-4">Orders Table</h2> */}
                        {/* Render the additional content under Orders tab */}
                        <div className="overflow-hidden bg-white shadow sm:rounded-md">
                            <ul role="list" className="divide-y divide-gray-200">
                                {orders.map((order) => (
                                    <li key={order.id} className="px-4 py-4 sm:px-6">
                                        <div className="flex">
                                            <div className="flex-1">
                                                <div className="font-bold">Company Name:</div>
                                                <div>{order.companyName}</div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold">Description:</div>
                                                <div>{order.description}</div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold">Amount:</div>
                                                <div>${order.amount}</div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold">Date:</div>
                                                <div>{order.date}</div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold">Status:</div>
                                                <div>{order.status}</div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );


            case 'Service Requests':
                return (
                    <div>
                        {/* Service Requests Table */}
                        {/* <h2 className="text-lg font-bold mb-4">Service Requests Table</h2> */}
                        {/* Render the additional content under Service Requests tab */}
                        <div className="overflow-hidden bg-white shadow sm:rounded-md">
                            <ul role="list" className="divide-y divide-gray-200">
                                {serviceRequests.map((serviceRequest) => (
                                    <li key={serviceRequest.id} className="px-4 py-4 sm:px-6">
                                        <div className="flex">
                                            <div className="flex-1">
                                                <div className="font-bold">Company Name:</div>
                                                <div>{serviceRequest.companyName}</div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold">Description:</div>
                                                <div>{serviceRequest.description}</div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold">Amount:</div>
                                                <div>${serviceRequest.amount}</div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold">Date:</div>
                                                <div>{serviceRequest.date}</div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold">Status:</div>
                                                <div>{serviceRequest.status}</div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                );


            case 'Parts':
                return (
                    <div>
                        {/* Parts Table */}
                        <div className="flex justify-between mb-4">
                            <h2 className="text-lg font-bold">Parts Table</h2>
                            {/* Add Bulk Upload button */}
                            <BulkUpload onUpload={handleBulkUpload} />
                        </div>
                        {/* Render the additional content under Parts tab */}
                        <div className="overflow-hidden bg-white shadow sm:rounded-md">
                            <ul role="list" className="divide-y divide-gray-200">
                                {parts.map((part) => (
                                    <li key={part.id} className="px-4 py-4 sm:px-6">
                                        <div className="flex">
                                            <div className="flex-1">
                                                <div className="font-bold">Name:</div>
                                                <div>{part.name}</div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold">Number:</div>
                                                <div>{part.number}</div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold">Description:</div>
                                                <div>{part.description}</div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );
            case 'Customers':
                return (
                    <div>
                        {/* Customers Table */}
                        {/* <h2 className="text-lg font-bold mb-4">Customers Table</h2> */}
                        {/* Render the additional content under Customers tab */}
                        <div className="overflow-hidden bg-white shadow sm:rounded-md">
                            <ul role="list" className="divide-y divide-gray-200">
                                {customers.map((customer) => (
                                    <li key={customer.id} className="px-4 py-4 sm:px-6">
                                        <div className="flex">
                                            <div className="flex-1">
                                                <div className="font-bold">Company Name:</div>
                                                <div>{customer.companyName}</div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold">Point of Contact:</div>
                                                <div>{customer.pointOfContact}</div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold">Email:</div>
                                                <div>{customer.email}</div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold">Number:</div>
                                                <div>{customer.phoneNumber}</div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8 mb-12">
            {/* Tabs */}
            <div className="flex justify-center my-4">
                <button
                    className={`mx-2 px-4 py-2 rounded ${activeTab === 'Orders' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                        }`}
                    onClick={() => handleTabChange('Orders')}
                >
                    Orders
                </button>
                <button
                    className={`mx-2 px-4 py-2 rounded ${activeTab === 'Service Requests' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                        }`}
                    onClick={() => handleTabChange('Service Requests')}
                >
                    Service Requests
                </button>
                <button
                    className={`mx-2 px-4 py-2 rounded ${activeTab === 'Parts' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                        }`}
                    onClick={() => handleTabChange('Parts')}
                >
                    Parts
                </button>
                <button
                    className={`mx-2 px-4 py-2 rounded ${activeTab === 'Customers' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                        }`}
                    onClick={() => handleTabChange('Customers')}
                >
                    Customers
                </button>
            </div>

            {/* Tab Content */}
            {renderTabContent()}
        </div>
    );
};

export default MachineInfo;


// import React, { useState } from 'react';
// import BulkUpload from './BulkUpload';
// import { parseExcelFile } from './parseExcelFile';



// const MachineInfo = () => {
//     const [activeTab, setActiveTab] = useState('Orders');

//     const handleTabChange = (tab) => {
//         setActiveTab(tab);
//     };

//     // Define function to handle the uploaded file and parsed data
//     const handleBulkUpload = (file) => {
//         // Handle the uploaded file, e.g., parse and process the data
//         parseExcelFile(file, handleParsedData);
//     };

//     const handleParsedData = (parsedData) => {
//         // Handle the parsed data, e.g., update state or send to server
//         console.log("Parsed Data:", parsedData);
//     };

//     const orders = [
//         {
//             id: 1,
//             companyName: "ABC Company",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//             amount: 1000,
//             date: "2024-04-04",
//             status: "delivered"
//         },
//         {
//             id: 2,
//             companyName: "XYZ Corporation",
//             description: "Sed do eiusmod tempor incididunt ut lae magna aliqua.",
//             amount: 1500,
//             date: "2024-04-03",
//             status: "in route"
//         },
//         {
//             id: 3,
//             companyName: "123 Inc.",
//             description: "Ut enim ad minim veniam, quiquip commodo consequat.",
//             amount: 2000,
//             date: "2024-04-02",
//             status: "processing"
//         }
//     ];

//     const serviceRequests = [
//         {
//             id: 1,
//             companyName: "ABC Company",
//             description: "Lorem ipsum dolor ng elit.",
//             amount: 500,
//             date: "2024-04-04",
//             status: "delivered"
//         },
//         {
//             id: 2,
//             companyName: "XYZ Corporation",
//             description: "Sed do eiusmod tet dolore magna aliqua.",
//             amount: 750,
//             date: "2024-04-03",
//             status: "in route"
//         },
//         {
//             id: 3,
//             companyName: "123 Inc.",
//             description: "Ut enim ad minex ea commodo consequat.",
//             amount: 1000,
//             date: "2024-04-02",
//             status: "processing"
//         }
//     ];

//     const parts = [
//         {
//             id: 1,
//             name: "Machine A",
//             number: "Submodel 1",
//             description: "Description A",
//             href: "/part{id}"
//         },
//         {
//             id: 2,
//             name: "Machine B",
//             number: "Submodel 2",
//             description: "Description B",
//             href: "/part{id}"
//         },
//         {
//             id: 3,
//             name: "Machine C",
//             number: "Submodel 3",
//             description: "Description C",
//             href: "/part{id}"
//         }
//     ];

//     const customers = [
//         {
//             id: 1,
//             companyName: "ABC Company",
//             pointOfContact: "John Doe",
//             email: "john.doe@example.com",
//             phoneNumber: "123-456-7890"
//         },
//         {
//             id: 2,
//             companyName: "XYZ Corporation",
//             pointOfContact: "Jane Smith",
//             email: "jane.smith@example.com",
//             phoneNumber: "987-654-3210"
//         },
//         {
//             id: 3,
//             companyName: "123 Inc.",
//             pointOfContact: "Alice Johnson",
//             email: "alice.johnson@example.com",
//             phoneNumber: "555-555-5555"
//         }
//     ];

//     const renderTabContent = () => {
//         switch (activeTab) {
//             case 'Orders':
//                 return (
//                     <div>
//                         {/* Orders Table */}
//                         {/* <h2 className="text-lg font-bold mb-4">Orders Table</h2> */}
//                         {/* Render the additional content under Orders tab */}
//                         <div className="overflow-hidden bg-white shadow sm:rounded-md">
//                             <ul role="list" className="divide-y divide-gray-200">
//                                 {orders.map((order) => (
//                                     <li key={order.id} className="px-4 py-4 sm:px-6">
//                                         <div className="flex">
//                                             <div className="flex-1">
//                                                 <div className="font-bold">Company Name:</div>
//                                                 <div>{order.companyName}</div>
//                                             </div>
//                                             <div className="flex-1">
//                                                 <div className="font-bold">Description:</div>
//                                                 <div>{order.description}</div>
//                                             </div>
//                                             <div className="flex-1">
//                                                 <div className="font-bold">Amount:</div>
//                                                 <div>${order.amount}</div>
//                                             </div>
//                                             <div className="flex-1">
//                                                 <div className="font-bold">Date:</div>
//                                                 <div>{order.date}</div>
//                                             </div>
//                                             <div className="flex-1">
//                                                 <div className="font-bold">Status:</div>
//                                                 <div>{order.status}</div>
//                                             </div>
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 );


//             case 'Service Requests':
//                 return (
//                     <div>
//                         {/* Service Requests Table */}
//                         {/* <h2 className="text-lg font-bold mb-4">Service Requests Table</h2> */}
//                         {/* Render the additional content under Service Requests tab */}
//                         <div className="overflow-hidden bg-white shadow sm:rounded-md">
//                             <ul role="list" className="divide-y divide-gray-200">
//                                 {serviceRequests.map((serviceRequest) => (
//                                     <li key={serviceRequest.id} className="px-4 py-4 sm:px-6">
//                                         <div className="flex">
//                                             <div className="flex-1">
//                                                 <div className="font-bold">Company Name:</div>
//                                                 <div>{serviceRequest.companyName}</div>
//                                             </div>
//                                             <div className="flex-1">
//                                                 <div className="font-bold">Description:</div>
//                                                 <div>{serviceRequest.description}</div>
//                                             </div>
//                                             <div className="flex-1">
//                                                 <div className="font-bold">Amount:</div>
//                                                 <div>${serviceRequest.amount}</div>
//                                             </div>
//                                             <div className="flex-1">
//                                                 <div className="font-bold">Date:</div>
//                                                 <div>{serviceRequest.date}</div>
//                                             </div>
//                                             <div className="flex-1">
//                                                 <div className="font-bold">Status:</div>
//                                                 <div>{serviceRequest.status}</div>
//                                             </div>
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>

//                         </div>
//                     </div>
//                 );


//             case 'Parts':
//                 return (
//                     <div>
//                         {/* Parts Table */}
//                         <div className="flex justify-between mb-4">
//                             <h2 className="text-lg font-bold">Parts Table</h2>
//                             {/* Add Bulk Upload button */}
//                             <BulkUpload />
//                         </div>
//                         {/* Render the additional content under Parts tab */}
//                         <div className="overflow-hidden bg-white shadow sm:rounded-md">
//                             <ul role="list" className="divide-y divide-gray-200">
//                                 {parts.map((part) => (
//                                     <li key={part.id} className="px-4 py-4 sm:px-6">
//                                         <div className="flex">
//                                             <div className="flex-1">
//                                                 <div className="font-bold">Name:</div>
//                                                 <div>{part.name}</div>
//                                             </div>
//                                             <div className="flex-1">
//                                                 <div className="font-bold">Number:</div>
//                                                 <div>{part.number}</div>
//                                             </div>
//                                             <div className="flex-1">
//                                                 <div className="font-bold">Description:</div>
//                                                 <div>{part.description}</div>
//                                             </div>
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>

//                         </div>
//                     </div>
//                 );
//             case 'Customers':
//                 return (
//                     <div>
//                         {/* Customers Table */}
//                         {/* <h2 className="text-lg font-bold mb-4">Customers Table</h2> */}
//                         {/* Render the additional content under Customers tab */}
//                         <div className="overflow-hidden bg-white shadow sm:rounded-md">
//                             <ul role="list" className="divide-y divide-gray-200">
//                                 {customers.map((customer) => (
//                                     <li key={customer.id} className="px-4 py-4 sm:px-6">
//                                         <div className="flex">
//                                             <div className="flex-1">
//                                                 <div className="font-bold">Company Name:</div>
//                                                 <div>{customer.companyName}</div>
//                                             </div>
//                                             <div className="flex-1">
//                                                 <div className="font-bold">Point of Contact:</div>
//                                                 <div>{customer.pointOfContact}</div>
//                                             </div>
//                                             <div className="flex-1">
//                                                 <div className="font-bold">Email:</div>
//                                                 <div>{customer.email}</div>
//                                             </div>
//                                             <div className="flex-1">
//                                                 <div className="font-bold">Number:</div>
//                                                 <div>{customer.phoneNumber}</div>
//                                             </div>
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8 mb-12">
//             {/* Tabs */}
//             <div className="flex justify-center my-4">
//                 <button
//                     className={`mx-2 px-4 py-2 rounded ${activeTab === 'Orders' ? 'bg-blue-500 text-white' : 'bg-gray-300'
//                         }`}
//                     onClick={() => handleTabChange('Orders')}
//                 >
//                     Orders
//                 </button>
//                 <button
//                     className={`mx-2 px-4 py-2 rounded ${activeTab === 'Service Requests' ? 'bg-blue-500 text-white' : 'bg-gray-300'
//                         }`}
//                     onClick={() => handleTabChange('Service Requests')}
//                 >
//                     Service Requests
//                 </button>
//                 <button
//                     className={`mx-2 px-4 py-2 rounded ${activeTab === 'Parts' ? 'bg-blue-500 text-white' : 'bg-gray-300'
//                         }`}
//                     onClick={() => handleTabChange('Parts')}
//                 >
//                     Parts
//                 </button>
//                 <button
//                     className={`mx-2 px-4 py-2 rounded ${activeTab === 'Customers' ? 'bg-blue-500 text-white' : 'bg-gray-300'
//                         }`}
//                     onClick={() => handleTabChange('Customers')}
//                 >
//                     Customers
//                 </button>
//             </div>

//             {/* Tab Content */}
//             {renderTabContent()}
//         </div>
//     );
// };

// export default MachineInfo;
