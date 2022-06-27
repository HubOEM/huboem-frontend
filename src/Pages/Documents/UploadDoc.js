import Footer from "../General/Footer.js"
import { ChevronDownIcon } from '@heroicons/react/solid'

import React from 'react'

function UploadDoc() {
    return (
        <>
            <div className="min-h-full pb-24 pl-24 pr-24">
                <div className="lg:pl-64 flex flex-col flex-1">
                    <div className="bg-white">
                        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
                            <div className="max-w-xl">
                                <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                                    Add Documents
                                </h2>
                                <p className="mt-5 text-xl text-gray-500">
                                    Upload documents for your machine, sub-assemblies, parts, or whatever.
                                </p>
                            </div>
                            {/* <div className="mt-10 w-full max-w-xs">
                                <label htmlFor="type" className="block text-base font-medium text-gray-500">
                                    Sort by
                                </label>
                                <div className="mt-1.5 relative">
                                    <select
                                        id="type"
                                        name="type"
                                        className="appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-base text-gray-900 focus:outline-none focus:ring-[#679CE8] focus:border-[#679CE8] sm:text-sm"
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
                            </div> */}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
                            <div className="md:grid md:grid-cols-3 md:gap-6">
                                <div className="md:col-span-1">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Document</h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        This information will be displayed for your organization to see.
                                    </p>
                                </div>
                                <div className="mt-5 md:mt-0 md:col-span-2">
                                    <form className="space-y-6" action="#" method="POST">
                                        <div className="grid grid-cols-3 gap-6">
                                            <div className="col-span-3 sm:col-span-2">
                                                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                                    Document Name
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <input
                                                        type="text"
                                                        name="company-website"
                                                        id="company-website"
                                                        className="focus:ring-[#679CE8] focus:border-[#679CE8] flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                        placeholder="Description of the document, particular notes, etc."
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-span-3 sm:col-span-2">
                                                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                                    Company
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <input
                                                        type="text"
                                                        name="company-website"
                                                        id="company-website"
                                                        className="focus:ring-[#679CE8] focus:border-[#679CE8] flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                        placeholder="Select Company"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                                About
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="about"
                                                    name="about"
                                                    rows={3}
                                                    className="shadow-sm focus:ring-[#679CE8] focus:border-[#679CE8] block w-full sm:text-sm border border-gray-300 rounded-md"
                                                    placeholder="Enter notes here..."
                                                    defaultValue={''}
                                                />
                                            </div>
                                            <p className="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Document Upload</label>
                                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                <div className="space-y-1 text-center">
                                                    <svg
                                                        className="mx-auto h-12 w-12 text-gray-400"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        viewBox="0 0 48 48"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <div className="flex text-sm text-gray-600">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer bg-white rounded-md font-medium text-[#679CE8] hover:text-[#4586e1] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#679CE8]"
                                                        >
                                                            <span>Upload a file</span>
                                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                        </label>
                                                        <p className="pl-1">or drag and drop</p>
                                                    </div>
                                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
                            <div className="md:grid md:grid-cols-3 md:gap-6">
                                <div className="md:col-span-1">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                                    <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
                                </div>
                                <div className="mt-5 md:mt-0 md:col-span-2">
                                    <form action="#" method="POST">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                    First name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    className="mt-1 focus:ring-[#679CE8] focus:border-[#679CE8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                    Last name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className="mt-1 focus:ring-[#679CE8] focus:border-[#679CE8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-4">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                    Email address
                                                </label>
                                                <input
                                                    type="text"
                                                    name="email-address"
                                                    id="email-address"
                                                    autoComplete="email"
                                                    className="mt-1 focus:ring-[#679CE8] focus:border-[#679CE8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                    Country
                                                </label>
                                                <select
                                                    id="country"
                                                    name="country"
                                                    autoComplete="country-name"
                                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#679CE8] focus:border-[#679CE8] sm:text-sm"
                                                >
                                                    <option>United States</option>
                                                    <option>Canada</option>
                                                    <option>Mexico</option>
                                                </select>
                                            </div>

                                            <div className="col-span-6">
                                                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                    Street address
                                                </label>
                                                <input
                                                    type="text"
                                                    name="street-address"
                                                    id="street-address"
                                                    autoComplete="street-address"
                                                    className="mt-1 focus:ring-[#679CE8] focus:border-[#679CE8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    id="city"
                                                    autoComplete="address-level2"
                                                    className="mt-1 focus:ring-[#679CE8] focus:border-[#679CE8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                                    State / Province
                                                </label>
                                                <input
                                                    type="text"
                                                    name="region"
                                                    id="region"
                                                    autoComplete="address-level1"
                                                    className="mt-1 focus:ring-[#679CE8] focus:border-[#679CE8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                    ZIP / Postal code
                                                </label>
                                                <input
                                                    type="text"
                                                    name="postal-code"
                                                    id="postal-code"
                                                    autoComplete="postal-code"
                                                    className="mt-1 focus:ring-[#679CE8] focus:border-[#679CE8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
                            <div className="md:grid md:grid-cols-3 md:gap-6">
                                <div className="md:col-span-1">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
                                    <p className="mt-1 text-sm text-gray-500">Decide which communications you'd like to receive and how.</p>
                                </div>
                                <div className="mt-5 md:mt-0 md:col-span-2">
                                    <form className="space-y-6" action="#" method="POST">
                                        <fieldset>
                                            <legend className="sr-only">By Email</legend>
                                            <div className="text-base font-medium text-gray-900" aria-hidden="true">
                                                By Email
                                            </div>
                                            <div className="mt-4 space-y-4">
                                                <div className="flex items-start">
                                                    <div className="h-5 flex items-center">
                                                        <input
                                                            id="comments"
                                                            name="comments"
                                                            type="checkbox"
                                                            className="focus:ring-[#679CE8] h-4 w-4 text-[#679CE8] border-gray-300 rounded"
                                                        />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                        <label htmlFor="comments" className="font-medium text-gray-700">
                                                            Comments
                                                        </label>
                                                        <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start">
                                                    <div className="flex items-center h-5">
                                                        <input
                                                            id="candidates"
                                                            name="candidates"
                                                            type="checkbox"
                                                            className="focus:ring-[#679CE8] h-4 w-4 text-[#679CE8] border-gray-300 rounded"
                                                        />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                        <label htmlFor="candidates" className="font-medium text-gray-700">
                                                            Candidates
                                                        </label>
                                                        <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start">
                                                    <div className="flex items-center h-5">
                                                        <input
                                                            id="offers"
                                                            name="offers"
                                                            type="checkbox"
                                                            className="focus:ring-[#679CE8] h-4 w-4 text-[#679CE8] border-gray-300 rounded"
                                                        />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                        <label htmlFor="offers" className="font-medium text-gray-700">
                                                            Offers
                                                        </label>
                                                        <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset>
                                            <legend className="contents text-base font-medium text-gray-900">Push Notifications</legend>
                                            <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                                            <div className="mt-4 space-y-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="push-everything"
                                                        name="push-notifications"
                                                        type="radio"
                                                        className="focus:ring-[#679CE8] h-4 w-4 text-[#679CE8] border-gray-300"
                                                    />
                                                    <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Everything
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="push-email"
                                                        name="push-notifications"
                                                        type="radio"
                                                        className="focus:ring-[#679CE8] h-4 w-4 text-[#679CE8] border-gray-300"
                                                    />
                                                    <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Same as email
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="push-nothing"
                                                        name="push-notifications"
                                                        type="radio"
                                                        className="focus:ring-[#679CE8] h-4 w-4 text-[#679CE8] border-gray-300"
                                                    />
                                                    <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                                                        No push notifications
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div> */}

                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#679CE8]"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#5ED797] hover:bg-[#28cf76] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#679CE8]"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default UploadDoc