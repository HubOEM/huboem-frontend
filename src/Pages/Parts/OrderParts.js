import { ChevronDownIcon } from '@heroicons/react/solid'

const parts = [
    {
        id: 1,
        name: 'Gear',
        partNumber: 'P-23453',
        machineSerial: 'M-4930',
        companyName: 'FILTEC',
        price: 2.00,
        quantity: 2,
        isCurrent: false,
    },
    {
        id: 2,
        name: 'Belt',
        partNumber: 'P-889333',
        machineSerial: 'M-6222344',
        companyName: 'Douglas',
        price: 4.00,
        quantity: 2,
        isCurrent: true,
    },
    {
        id: 1,
        name: 'Gear',
        partNumber: 'P-23453',
        machineSerial: 'M-4930',
        companyName: 'FILTEC',
        price: 2.00,
        quantity: 2,
        isCurrent: false,
    },
    {
        id: 2,
        name: 'Belt',
        partNumber: 'P-889333',
        machineSerial: 'M-6222344',
        companyName: 'Douglas',
        price: 4.00,
        quantity: 2,
        isCurrent: true,
    },
    {
        id: 1,
        name: 'Gear',
        partNumber: 'P-23453',
        machineSerial: 'M-4930',
        companyName: 'FILTEC',
        price: 2.00,
        quantity: 2,
        isCurrent: false,
    },
    {
        id: 2,
        name: 'Belt',
        partNumber: 'P-889333',
        machineSerial: 'M-6222344',
        companyName: 'Douglas',
        price: 4.00,
        quantity: 2,
        isCurrent: true,
    },
    {
        id: 1,
        name: 'Gear',
        partNumber: 'P-23453',
        machineSerial: 'M-4930',
        companyName: 'FILTEC',
        price: 2.00,
        quantity: 2,
        isCurrent: false,
    },
    {
        id: 2,
        name: 'Belt',
        partNumber: 'P-889333',
        machineSerial: 'M-6222344',
        companyName: 'Douglas',
        price: 4.00,
        quantity: 2,
        isCurrent: true,
    },
    {
        id: 1,
        name: 'Gear',
        partNumber: 'P-23453',
        machineSerial: 'M-4930',
        companyName: 'FILTEC',
        price: 2.00,
        quantity: 2,
        isCurrent: false,
    },
    {
        id: 2,
        name: 'Belt',
        partNumber: 'P-889333',
        machineSerial: 'M-6222344',
        companyName: 'Douglas',
        price: 4.00,
        quantity: 2,
        isCurrent: true,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function OrderParts() {

const totalPrice = () => {
    parts.map((part) => {
       return part.price * part.quantity
    })
}


    return (
        <>
            <div className="min-h-full pb-24 pl-24 pr-24">
                <div className="lg:pl-64 flex flex-col flex-1">
                    <div className="bg-white mt-24">
                        {/* <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
                            <div className="max-w-xl">
                                <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                                    Order Parts
                                </h2>
                                <p className="mt-5 text-xl text-gray-500">
                                    IDK
                                </p>
                            </div>
                            <div className="mt-10 w-full max-w-xs">
                                <label htmlFor="type" className="block text-base font-medium text-gray-500">
                                    Sort by
                                </label>
                                <div className="mt-1.5 relative">
                                    <select
                                        id="type"
                                        name="type"
                                        className="appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-base text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        defaultValue="Serial Number"
                                    >
                                        <option>Machine (Serial #)</option>
                                        <option>Company</option>
                                        <option>Time frame</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                                        <ChevronDownIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-2xl font-semibold text-gray-900">Order Parts</h1>
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
                                    Add to cart
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
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Price
                                        </th>
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
                                                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                                )}
                                            >
                                                ${part.price}
                                            </td>
                                            <td
                                                className={classNames(
                                                    partIdx === 0 ? '' : 'border-t border-gray-200',
                                                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                                )}
                                            >
                                                <div className="w-16 sm:w-8">
                                                    <input
                                                        type="quantity"
                                                        name="quantity"
                                                        id="quantity"
                                                        className="shadow-sm focus:ring-[#5ED797] focus:border-[#28cf76] block w-full sm:text-sm border-gray-300 rounded-md"
                                                        placeholder="Qty."
                                                        value={part.quantity}
                                                    />
                                                </div>
                                            </td>
                                            <td
                                                className={classNames(
                                                    partIdx === 0 ? '' : 'border-t border-gray-200',
                                                    'px-3 py-3.5 text-sm text-gray-500'
                                                )}
                                            >
                                                <div className="sm:hidden">{part.price * part.quantity}</div>
                                                <div className="hidden sm:block">${part.price * part.quantity}</div>
                                            </td>
                                            <td
                                                className={classNames(
                                                    partIdx === 0 ? '' : 'border-t border-transparent',
                                                    'relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium'
                                                )}
                                            >
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[679CE8] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                                    disabled={part.isCurrent}
                                                >
                                                    Select<span className="sr-only">, {part.name}</span>
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

