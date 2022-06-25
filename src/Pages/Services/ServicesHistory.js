import { ChevronDownIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom'

const services = [
    {
        name: 'Lindsay Walton',
        startDate: '06/11/2021',
        endDate: '06/21/2021',
        title: 'Front-end Developer',
        department: 'Optimization',
        email: 'lindsay.walton@example.com',
        role: 'Member',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Lindsay Walton',
        startDate: '06/11/2021',
        endDate: '06/21/2021',
        title: 'Front-end Developer',
        department: 'Optimization',
        email: 'lindsay.walton@example.com',
        role: 'Member',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Lindsay Walton',
        startDate: '06/11/2021',
        endDate: '06/21/2021',
        title: 'Front-end Developer',
        department: 'Optimization',
        email: 'lindsay.walton@example.com',
        role: 'Member',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Lindsay Walton',
        startDate: '06/11/2021',
        endDate: '06/21/2021',
        title: 'Front-end Developer',
        department: 'Optimization',
        email: 'lindsay.walton@example.com',
        role: 'Member',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Lindsay Walton',
        startDate: '06/11/2021',
        endDate: '06/21/2021',
        title: 'Front-end Developer',
        department: 'Optimization',
        email: 'lindsay.walton@example.com',
        role: 'Member',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More services...
]

function ServicesHistory() {
    const navigate = useNavigate();

    function requestServices() {
        navigate("/Request_Services")
    }
    return (
        <div>
            <div className="min-h-full pt-24 pb-24 pl-24 pr-24">
                <div className="lg:pl-64 flex flex-col flex-1">
                    <div className="bg-white">
                        <div className="px-4 sm:px-6 lg:px-8">
                            <div className="sm:flex-auto">
                                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Services History</h1>
                                <p className="mt-2 text-sm text-gray-700">
                                    Your team is on the <strong className="font-semibold text-gray-900">Tier 2</strong> plan.
                                    You have had 3 services scheduled in the past month.
                                </p>
                            </div>
                        </div>
                        {/* <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
                            <div className="max-w-xl">
                                <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                                    Services History
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
                                <h1 className="text-xl font-semibold text-gray-900"></h1>
                                <p className="mt-2 text-sm text-gray-700">
                                </p>
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <button
                                    onClick={requestServices}
                                    type="button"
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#679CE8] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#4586e1] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                >
                                    Request service
                                </button>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col">
                            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-300">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                        Name
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Date
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Title
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Status
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Role
                                                    </th>
                                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                        <span className="sr-only">Edit</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 bg-white">
                                                {services.map((service) => (
                                                    <tr key={service.email}>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                            <div className="flex items-center">
                                                                <div className="h-10 w-10 flex-shrink-0">
                                                                    <img className="h-10 w-10 rounded-full" src={service.image} alt="" />
                                                                </div>
                                                                <div className="ml-4">
                                                                    <div className="font-medium text-gray-900">{service.name}</div>
                                                                    <div className="text-gray-500">{service.email}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                            <div className="text-gray-900">{service.startDate}</div>
                                                            <div className="text-gray-500">{service.endDate}</div>
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                            <div className="text-gray-900">{service.title}</div>
                                                            <div className="text-gray-500">{service.department}</div>
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-[#5ED797]">
                                                                Active
                                                            </span>
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{service.role}</td>
                                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                            <a href="#" className="text-[#679CE8] hover:text-[#4586e1]">
                                                                More Info<span className="sr-only">, {service.name}</span>
                                                            </a>
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
        </div>
    )
}


export default ServicesHistory