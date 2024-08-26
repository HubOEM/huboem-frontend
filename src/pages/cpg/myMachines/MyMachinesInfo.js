import React, { useState } from 'react';

const DistributorInfo = () => {
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
            type: "Type A"
        },
        {
            id: 2,
            modelName: "Machine B",
            subModel: "Submodel 2",
            type: "Type B"
        },
        {
            id: 3,
            modelName: "Machine C",
            subModel: "Submodel 3",
            type: "Type C"
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
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Name</th>
                                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {orders.map((order) => (
                                        <tr key={order.id}>
                                            <td className="px-4 py-2 whitespace-nowrap">{order.companyName}</td>
                                            <td className="px-4 py-2 whitespace-nowrap">{order.description}</td>
                                            <td className="px-4 py-2 whitespace-nowrap">${order.amount}</td>
                                            <td className="px-4 py-2 whitespace-nowrap">{order.date}</td>
                                            <td className="px-4 py-2 whitespace-nowrap">{order.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Name</th>
                                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {serviceRequests.map((serviceRequest) => (
                                        <tr key={serviceRequest.id}>
                                            <td className="px-4 py-2 whitespace-nowrap">{serviceRequest.companyName}</td>
                                            <td className="px-4 py-2 whitespace-nowrap">{serviceRequest.description}</td>
                                            <td className="px-4 py-2 whitespace-nowrap">${serviceRequest.amount}</td>
                                            <td className="px-4 py-2 whitespace-nowrap">{serviceRequest.date}</td>
                                            <td className="px-4 py-2 whitespace-nowrap">{serviceRequest.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model Name</th>
                                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sub Model Name</th>
                                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {machines.map((machine) => (
                                        <tr key={machine.id}>
                                            <td className="px-4 py-2 whitespace-nowrap">{machine.modelName}</td>
                                            <td className="px-4 py-2 whitespace-nowrap">{machine.subModel}</td>
                                            <td className="px-4 py-2 whitespace-nowrap">{machine.type}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Name</th>
                                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Point of Contact</th>
                                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {customers.map((customer) => (
                                        <tr key={customer.id}>
                                            <td className="px-4 py-2 whitespace-nowrap">{customer.companyName}</td>
                                            <td className="px-4 py-2 whitespace-nowrap">{customer.pointOfContact}</td>
                                            <td className="px-4 py-2 whitespace-nowrap">{customer.email}</td>
                                            <td className="px-4 py-2 whitespace-nowrap">{customer.phoneNumber}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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

export default DistributorInfo;
