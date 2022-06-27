import { ChevronDownIcon } from '@heroicons/react/solid'

import React from 'react'

function Header({ title, description }) {
    return (
        <div className="min-h-full px-24">
            <div className="lg:pl-64 flex flex-col flex-1">
                <div className="bg-white">
                    <div className="max-w-7xl mx-auto pt-16 px-4 sm:pt-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                                {title}
                            </h2>
                            <p className="mt-5 text-xl text-gray-500">
                                {description}
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header