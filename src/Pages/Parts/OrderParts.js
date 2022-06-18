/* This example requires Tailwind CSS v2.0+ */
// function totalPrice(){
//     return parts.price * parts.quantity
// }

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
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function OrderParts() {
    function totalPrice() {
        return parts.map((part) => (
            part.price * part.quantity
        ))
    }
    return (
        <div className="min-h-full pt-24 pb-24 pl-24 pr-24">
            <div className="lg:pl-64 flex flex-col flex-1">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center">
                        <div className="sm:flex-auto">
                            <h1 className="text-xl font-semibold text-gray-900">Parts</h1>
                            <p className="mt-2 text-sm text-gray-700">
                                Your team is on the <strong className="font-semibold text-gray-900">Tier 2</strong> plan. The next payment
                                of $80,000.00 will be due on August 4, 2022.
                            </p>
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                            >
                                Update credit card
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
                                                {part.isCurrent ? <span className="text-indigo-600"> (Current Parts)</span> : null}
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
                                            {part.quantity}
                                        </td>
                                        <td
                                            className={classNames(
                                                partIdx === 0 ? '' : 'border-t border-gray-200',
                                                'px-3 py-3.5 text-sm text-gray-500'
                                            )}
                                        >
                                            <div className="sm:hidden">{totalPrice()}</div>
                                            <div className="hidden sm:block">{totalPrice()}</div>
                                        </td>
                                        <td
                                            className={classNames(
                                                partIdx === 0 ? '' : 'border-t border-transparent',
                                                'relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium'
                                            )}
                                        >
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
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
    )
}


export default OrderParts

