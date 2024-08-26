import React, { useState } from 'react';

const OEMInfo = () => {
    const [activeTab, setActiveTab] = useState('Orders');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
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

    const machines = [
        {
            id: 1,
            modelName: "Machine A",
            subModel: "Submodel 1",
            type: "Type A",
            href: "/machine_model{id}"
        },
        {
            id: 2,
            modelName: "Machine B",
            subModel: "Submodel 2",
            type: "Type B",
            href: "/machine_model{id}"
        },
        {
            id: 3,
            modelName: "Machine C",
            subModel: "Submodel 3",
            type: "Type C",
            href: "/machine_model{id}"
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
                                {/* Title Row */}
                                <li className="px-4 py-4 sm:px-6">
                                    <div className="flex">
                                        <div className="flex-1 font-bold">Company Name:</div>
                                        <div className="flex-1 font-bold">Description:</div>
                                        <div className="flex-1 font-bold">Amount:</div>
                                        <div className="flex-1 font-bold">Date:</div>
                                        <div className="flex-1 font-bold">Status:</div>
                                    </div>
                                </li>

                                {/* Data Rows */}
                                {orders.map((order) => (
                                    <li key={order.id} className="px-4 py-4 sm:px-6">
                                        <div className="flex">
                                            <div className="flex-1">{order.companyName}</div>
                                            <div className="flex-1">{order.description}</div>
                                            <div className="flex-1">${order.amount}</div>
                                            <div className="flex-1">{order.date}</div>
                                            <div className="flex-1">{order.status}</div>
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
                                {/* Title Row */}
                                <li className="px-4 py-4 sm:px-6">
                                    <div className="flex">
                                        <div className="flex-1 font-bold">Company Name:</div>
                                        <div className="flex-1 font-bold">Description:</div>
                                        <div className="flex-1 font-bold">Amount:</div>
                                        <div className="flex-1 font-bold">Date:</div>
                                        <div className="flex-1 font-bold">Status:</div>
                                    </div>
                                </li>

                                {/* Data Rows */}
                                {serviceRequests.map((serviceRequest) => (
                                    <li key={serviceRequest.id} className="px-4 py-4 sm:px-6">
                                        <div className="flex">
                                            <div className="flex-1">{serviceRequest.companyName}</div>
                                            <div className="flex-1">{serviceRequest.description}</div>
                                            <div className="flex-1">${serviceRequest.amount}</div>
                                            <div className="flex-1">{serviceRequest.date}</div>
                                            <div className="flex-1">{serviceRequest.status}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );

            case 'Machines':
                return (
                    <div>
                        {/* Machines Table */}
                        {/* <h2 className="text-lg font-bold mb-4">Machines Table</h2> */}
                        {/* Render the additional content under Machines tab */}
                        <div className="overflow-hidden bg-white shadow sm:rounded-md">
                            <ul role="list" className="divide-y divide-gray-200">
                                {/* Title Row */}
                                <li className="px-4 py-4 sm:px-6">
                                    <div className="flex">
                                        <div className="flex-1 font-bold">Model Name:</div>
                                        <div className="flex-1 font-bold">Sub Model Name:</div>
                                        <div className="flex-1 font-bold">Type:</div>
                                    </div>
                                </li>

                                {/* Data Rows */}
                                {machines.map((machine) => (
                                    <li key={machine.id} className="px-4 py-4 sm:px-6">
                                        <div className="flex">
                                            <div className="flex-1">
                                                <a href={"machine_model" + machine.id}>{machine.modelName}</a>
                                            </div>
                                            <div className="flex-1">{machine.subModel}</div>
                                            <div className="flex-1">{machine.type}</div>
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
                                {/* Title Row */}
                                <li className="px-4 py-4 sm:px-6">
                                    <div className="flex">
                                        <div className="flex-1 font-bold">Company Name:</div>
                                        <div className="flex-1 font-bold">Point of Contact:</div>
                                        <div className="flex-1 font-bold">Email:</div>
                                        <div className="flex-1 font-bold">Number:</div>
                                    </div>
                                </li>

                                {/* Data Rows */}
                                {customers.map((customer) => (
                                    <li key={customer.id} className="px-4 py-4 sm:px-6">
                                        <div className="flex">
                                            <div className="flex-1">{customer.companyName}</div>
                                            <div className="flex-1">{customer.pointOfContact}</div>
                                            <div className="flex-1">{customer.email}</div>
                                            <div className="flex-1">{customer.phoneNumber}</div>
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
                    className={`mx-2 px-4 py-2 rounded ${activeTab === 'Machines' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                        }`}
                    onClick={() => handleTabChange('Machines')}
                >
                    Machines
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

export default OEMInfo;
