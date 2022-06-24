import { useLayoutEffect, useRef, useState } from 'react'



const parts = [
    {
        name: 'Albert',
        serialPart: '234334',
        serialMachine: '789990',
        company: 'Big company co',
        quantity: '2',
        frequency: '1',
        price: '$45.45',
    },
    {
        name: 'Bobby',
        serialPart: '234334',
        serialMachine: '789990',
        company: 'Big company co',
        quantity: '2',
        frequency: '1',
        price: '$45.45',
    },
    {
        name: 'Colton',
        serialPart: '234334',
        serialMachine: '789990',
        company: 'Big company co',
        quantity: '2',
        frequency: '1',
        price: '$45.45',
    },
    {
        name: 'Darien',
        serialPart: '234334',
        serialMachine: '789990',
        company: 'Big company co',
        quantity: '2',
        frequency: '3',
        price: '$45.45',
    },
    {
        name: 'Evelin',
        serialPart: '234334',
        serialMachine: '789990',
        company: 'Big company co',
        quantity: '2',
        frequency: '1',
        price: '$45.45',
    },
    {
        name: 'Frank',
        serialPart: '234334',
        serialMachine: '789990',
        company: 'Big company co',
        quantity: '2',
        frequency: '0.5',
        price: '$45.45',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function RecurringOrders() {
    const [editable, setEditable] = useState(false)
    const checkbox = useRef()
    const [checked, setChecked] = useState(false)
    const [indeterminate, setIndeterminate] = useState(false)
    const [selectedPart, setSelectedPart] = useState([])

    useLayoutEffect(() => {
        const isIndeterminate = selectedPart.length > 0 && selectedPart.length < parts.length
        setChecked(selectedPart.length === parts.length)
        setIndeterminate(isIndeterminate)
        checkbox.current.indeterminate = isIndeterminate
    }, [selectedPart])

    function toggleAll() {
        setSelectedPart(checked || indeterminate ? [] : parts)
        setChecked(!checked && !indeterminate)
        setIndeterminate(false)
    }


    function handleEdit() {
        setEditable(!editable)
    }

    return (
        <>
            <div className="min-h-full pb-24 pl-24 pr-24">
                <div className="lg:pl-64 flex flex-col flex-1">
                    <div className="bg-white mt-24">
                        {/* <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
                            <div className="max-w-xl">
                                <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                                    Recurring Orders
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
                                        className="appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-base text-gray-900 focus:outline-none focus:ring-[#4586e1] focus:border-[#4586e1] sm:text-sm"
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
                                <h1 className="text-xl font-semibold text-gray-900">Recurring Orders</h1>
                                <p className="mt-2 text-sm text-gray-700">
                                    A list of all the recurring parts orders include part number, serial number, company, quantity, frequency, and cost.
                                </p>
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#679CE8] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#4586e1] focus:outline-none focus:ring-2 focus:ring-[#4586e1] focus:ring-offset-2 sm:w-auto"
                                >
                                    Add part
                                </button>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col">
                            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                    <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                        {selectedPart.length > 0 && (
                                            <div className="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#4586e1] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                                >
                                                    Bulk edit
                                                </button>
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#4586e1] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                                >
                                                    Delete all
                                                </button>
                                            </div>
                                        )}
                                        <table className="min-w-full table-fixed divide-y divide-gray-300">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
                                                        <input
                                                            type="checkbox"
                                                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-[#569CE8] focus:ring-[#4586e1] sm:left-6"
                                                            ref={checkbox}
                                                            checked={checked}
                                                            onChange={toggleAll}
                                                        />
                                                    </th>
                                                    <th scope="col" className="min-w-[8rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                                                        Name
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Part Serial
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Machine Serial
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Company
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Price
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Quantity
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Frequency
                                                    </th>
                                                    {/* <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Total
                                                    </th> */}
                                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                        <span className="sr-only">Edit</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 bg-white">
                                                {parts.map((part) => (
                                                    <tr key={part.name} className={selectedPart.includes(part) ? 'bg-gray-50' : undefined}>
                                                        <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                                                            {selectedPart.includes(part) && (
                                                                <div className="absolute inset-y-0 left-0 w-0.5 bg-[#569CE8]" />
                                                            )}
                                                            <input
                                                                type="checkbox"
                                                                className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-[#569CE8] focus:ring-[#4586e1] sm:left-6"
                                                                value={part.serialPart && part.company}
                                                                checked={selectedPart.includes(part)}
                                                                onChange={(e) =>
                                                                    setSelectedPart(
                                                                        e.target.checked
                                                                            ? [...selectedPart, part]
                                                                            : selectedPart.filter((p) => p !== part)
                                                                    )
                                                                }
                                                            />
                                                        </td>
                                                        <td
                                                            className={classNames(
                                                                'whitespace-nowrap py-4 pr-3 text-sm font-medium',
                                                                selectedPart.includes(part) ? 'text-[#569CE8]' : 'text-gray-900'
                                                            )}
                                                        >
                                                            {part.name}
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{part.serialMachine}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{part.serialPart}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{part.company}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{part.price}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                                            {editable ? (
                                                                <div className="w-16">
                                                                    <input
                                                                        type="text"
                                                                        name="quantity"
                                                                        id="quantity"
                                                                        className="shadow-apple focus:ring-[#679CE8] focus:border-[#4586e1] block w-full sm:text-sm border-gray-300 rounded-md placeholder-[#679CE8] placeholder-opacity-50"
                                                                        placeholder="Qty."
                                                                    />
                                                                </div>
                                                            ) : (
                                                                <div>{part.quantity}</div>
                                                            )}
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                                                            {editable ? (
                                                                <div className="w-16">
                                                                    <input
                                                                        type="text"
                                                                        name="quantity"
                                                                        id="quantity"
                                                                        className="shadow-apple focus:ring-[#679CE8] focus:border-[#4586e1] block w-full sm:text-sm border-gray-300 rounded-md placeholder-[#679CE8] placeholder-opacity-50"
                                                                        placeholder="(mo)"
                                                                    />
                                                                </div>
                                                            ) : (
                                                                <div>{part.frequency}</div>
                                                            )}
                                                        </td>
                                                        {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> month</td> */}
                                                        {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{part.price}</td> */}
                                                        <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                            <button onClick={handleEdit} className="text-[#679CE8] hover:text-[#4586e1]">
                                                                Edit<span className="sr-only">, {part.name}</span>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecurringOrders