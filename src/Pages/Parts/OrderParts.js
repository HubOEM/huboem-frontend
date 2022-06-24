import { ChevronDownIcon } from '@heroicons/react/solid'

import { useState } from 'react';

const parts = [
    {
        id: 1,
        name: 'Gear',
        partNumber: 'P-23453',
        machineSerial: 'M-4930',
        companyName: 'FILTEC',
        price: 2.00,
        quantity: '',
        isCurrent: false,
    },
    {
        id: '',
        name: 'Belt',
        partNumber: 'P-889333',
        machineSerial: 'M-6222344',
        companyName: 'Douglas',
        price: 4.00,
        quantity: '',
        isCurrent: false,
    },
    {
        id: 3,
        name: 'Gear',
        partNumber: 'P-23453',
        machineSerial: 'M-4930',
        companyName: 'FILTEC',
        price: 2.00,
        quantity: '',
        isCurrent: false,
    },
    {
        id: 4,
        name: 'Belt',
        partNumber: 'P-889333',
        machineSerial: 'M-6222344',
        companyName: 'Douglas',
        price: 4.00,
        quantity: '',
        isCurrent: false,
    },
    {
        id: 5,
        name: 'Gear',
        partNumber: 'P-23453',
        machineSerial: 'M-4930',
        companyName: 'FILTEC',
        price: 2.00,
        quantity: '',
        isCurrent: false,
    },
    {
        id: 6,
        name: 'Belt',
        partNumber: 'P-889333',
        machineSerial: 'M-6222344',
        companyName: 'Douglas',
        price: 4.00,
        quantity: '',
        isCurrent: false,
    },
    {
        id: 7,
        name: 'Gear',
        partNumber: 'P-23453',
        machineSerial: 'M-4930',
        companyName: 'FILTEC',
        price: 2.00,
        quantity: '',
        isCurrent: false,
    },
    {
        id: 8,
        name: 'Belt',
        partNumber: 'P-889333',
        machineSerial: 'M-6222344',
        companyName: 'Douglas',
        price: 4.00,
        quantity: '',
        isCurrent: false,
    },
    {
        id: 9,
        name: 'Gear',
        partNumber: 'P-23453',
        machineSerial: 'M-4930',
        companyName: 'FILTEC',
        price: 2.00,
        quantity: '',
        isCurrent: false,
    },
    {
        id: 10,
        name: 'Belt',
        partNumber: 'P-889333',
        machineSerial: 'M-6222344',
        companyName: 'Douglas',
        price: 4.00,
        quantity: '',
        isCurrent: false,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function OrderParts() {
    const [quantity, setQuantity] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const orderQuantity = {
            quantity,
        }
    }

    return (
        <>
            <div className="min-h-full pb-24 pl-24 pr-24">
                <div className="lg:pl-64 flex flex-col flex-1">
                    <div className="bg-white mt-24">
                    </div>

                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Order Parts</h1>
                                <p className="mt-2 text-sm text-gray-700">
                                    Your team is on the <strong className="font-semibold text-gray-900">Tier 2</strong> plan. The next payment
                                    of $80,000.00 will be due on August 4, 2022.
                                </p>
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#679CE8] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#4586e1] focus:outline-none focus:ring-2 focus:ring-[#679CE8] focus:ring-offset-2 sm:w-auto"
                                >
                                    Go to Cart
                                </button>
                            </div>
                        </div>
                        <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Part Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                                        >
                                            Part Number
                                        </th>
                                        <th
                                            scope="col"
                                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                                        >
                                            Machine Serial
                                        </th>
                                        <th
                                            scope="col"
                                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                                        >
                                            Company
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Price/Unit
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Quantity
                                        </th>
                                        {/* <th scope="col" className="px-3 py-3.5 text-left text-sm font-extrabold text-gray-900">
                                            Total
                                        </th> */}
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Select</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {parts.map((part, partIdx) => (
                                        <tr key={part.id}>
                                            <td
                                                className={classNames(
                                                    partIdx === 0 ? '' : 'border-t border-transparent',
                                                    'relative py-4 pl-4 sm:pl-6 pr-3 text-sm'
                                                )}
                                            >
                                                <div className="font-medium text-gray-900">
                                                    {part.name}
                                                    {part.isCurrent ? <span className="text-[#679CE8]"> (Current Parts)</span> : null}
                                                </div>
                                                <div className="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
                                                    <span>
                                                        {part.partNumber} / {part.machineSerial}
                                                    </span>
                                                    <span className="hidden sm:inline"> · </span>
                                                    <span>{part.companyName}</span>
                                                </div>
                                                {partIdx !== 0 ? <div className="absolute right-0 left-6 -top-px h-px bg-gray-200" /> : null}
                                            </td>
                                            <td
                                                className={classNames(
                                                    partIdx === 0 ? '' : 'border-t border-gray-200',
                                                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                                )}
                                            >
                                                {part.partNumber}
                                            </td>
                                            <td
                                                className={classNames(
                                                    partIdx === 0 ? '' : 'border-t border-gray-200',
                                                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                                )}
                                            >
                                                {part.machineSerial}
                                            </td>
                                            <td
                                                className={classNames(
                                                    partIdx === 0 ? '' : 'border-t border-gray-200',
                                                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                                )}
                                            >
                                                {part.companyName}
                                            </td>
                                            <td
                                                className={classNames(
                                                    partIdx === 0 ? '' : 'border-t border-gray-200',
                                                    'px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                                )}
                                            >
                                                ${part.price}
                                            </td>
                                            <td
                                                className={classNames(
                                                    partIdx === 0 ? '' : 'border-t border-gray-200',
                                                    'px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                                )}
                                            >
                                                <div className="w-16">
                                                    <input
                                                        type="text"
                                                        name="quantity"
                                                        id="quantity"
                                                        className="shadow-apple focus:ring-[#679CE8] focus:border-[#4586e1] block w-full sm:text-sm border-gray-300 rounded-md placeholder-[#679CE8] placeholder-opacity-50"
                                                        placeholder="Qty."
                                                    />
                                                </div>
                                            </td>
                                            {/* <td
                                                className={classNames(
                                                    partIdx === 0 ? '' : 'border-t border-gray-200',
                                                    'px-3 py-3.5 text-sm text-gray-500'
                                                )}
                                            >
                                                <div className="hidden sm:block">${part.price * part.quantity}</div>
                                            </td> */}
                                            <td
                                                className={classNames(
                                                    partIdx === 0 ? '' : 'border-t border-transparent',
                                                    'relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium'
                                                )}
                                            >
                                                <button
                                                    type="button"
                                                    className="shadow-apple inline-flex items-center rounded-md border border-[#28Cf76] bg-[#5ED797] px-3 py-2 text-sm font-medium leading-4 text-gray-700 hover:bg-[#28cf76] focus:outline-none focus:ring-2 focus:ring-[#5ED797] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                                    disabled={part.isCurrent}
                                                >
                                                    Add to Cart<span className="sr-only">, {part.name}</span>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="shadow-apple inline-flex items-center rounded-md border border-[#679CE8] bg-white px-1 py-2 mx-4 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[679CE8] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                                    disabled={part.isCurrent}
                                                >
                                                    More Info<span className="sr-only">, {part.name}</span>
                                                </button>
                                                {partIdx !== 0 ? <div className="absolute right-6 left-0 -top-px h-px bg-gray-200" /> : null}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default OrderParts

