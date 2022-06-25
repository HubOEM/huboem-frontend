import { ChevronDownIcon } from '@heroicons/react/solid'

function RequestServices() {
    return (
        <>
            <div className="min-h-full pb-24 pl-24 pr-24">
                <div className="lg:pl-64 flex flex-col flex-1">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="bg-white mt-24 mb-16">
                            <div className="sm:flex-auto">
                                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Request Services</h1>
                                <p className="mt-2 text-sm text-gray-700">
                                    Your team is on the <strong className="font-semibold text-gray-900">Tier 2</strong> plan.
                                    You have 2 services scheduled for the next month.
                                </p>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Machine</h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Select a machine to get started.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <form action="#" method="POST">
                                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                            <div className="grid grid-cols-3 gap-6">
                                                <div className="col-span-3 sm:col-span-2">
                                                    <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                                        Serial Number
                                                    </label>
                                                    <div className="mt-1 flex rounded-md shadow-sm">
                                                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                            Company (dropdown)
                                                        </span>
                                                        <input
                                                            type="text"
                                                            name="company-website"
                                                            id="company-website"
                                                            className="focus:ring-[#679CE8] focus:border-[#679CE8] flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                            placeholder="Serial number..."
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
                                                        className="shadow-sm focus:ring-[#679CE8] focus:border-[#679CE8] mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                        placeholder="Describe your problem..."
                                                        defaultValue={''}
                                                    />
                                                </div>
                                                <p className="mt-2 text-sm text-gray-500">
                                                    Brief description for your profile. URLs are hyperlinked.
                                                </p>
                                            </div>

                                            {/* <div>
                                            <label className="block text-sm font-medium text-gray-700">Photo</label>
                                            <div className="mt-1 flex items-center">
                                                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                    </svg>
                                                </span>
                                                <button
                                                    type="button"
                                                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#679CE8]"
                                                >
                                                    Change
                                                </button>
                                            </div>
                                        </div> */}

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Upload photos, videos, or other documents</label>
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
                                        </div>
                                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#679CE8] hover:bg-[#4586e1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#679CE8]"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                            <div className="border-t border-gray-200" />
                        </div>
                    </div>

                    {/* <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                                <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                            </div>
                        </div>
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
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
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#679CE8] hover:bg-[#4586e1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#679CE8]"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200" />
                    </div>
                </div> */}

                    <div className="mt-10 sm:mt-0">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                <div className="px-4 sm:px-0">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
                                    <p className="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
                                </div>
                            </div>
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <form action="#" method="POST">
                                    <div className="shadow overflow-hidden sm:rounded-md">
                                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                            <fieldset>
                                                <legend className="sr-only">By Email</legend>
                                                <div className="text-base font-medium text-gray-900" aria-hidden="true">
                                                    By Email
                                                </div>
                                                <div className="mt-4 space-y-4">
                                                    <div className="flex items-start">
                                                        <div className="flex items-center h-5">
                                                            <input
                                                                id="comments"
                                                                name="comments"
                                                                type="checkbox"
                                                                className="focus:ring-[#679CE8] h-4 w-4 text-[#679CE8] border-gray-300 rounded"
                                                            />
                                                        </div>
                                                        <div className="ml-3 text-sm">
                                                            <label htmlFor="comments" className="font-medium text-gray-700">
                                                                Accept/Decline/Edit Request
                                                            </label>
                                                            <p className="text-gray-500">Get notified when the vendor makes a decision on the request.</p>
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
                                                                Messages
                                                            </label>
                                                            <p className="text-gray-500">Get notified when a the vendor sends a message.</p>
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
                                                                Heads Up!
                                                            </label>
                                                            <p className="text-gray-500">Get notified when the serivce is a week out.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset>
                                                <legend className="contents text-base font-medium text-gray-900">Push Notifications</legend>
                                                <p className="text-sm text-gray-500">Text, desktop, or neither.</p>
                                                <div className="mt-4 space-y-4">
                                                    <div className="flex items-center">
                                                        <input
                                                            id="push-everything"
                                                            name="push-notifications"
                                                            type="radio"
                                                            className="focus:ring-[#679CE8] h-4 w-4 text-[#679CE8] border-gray-300"
                                                        />
                                                        <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                                            Text
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input
                                                            id="push-everything"
                                                            name="push-notifications"
                                                            type="radio"
                                                            className="focus:ring-[#679CE8] h-4 w-4 text-[#679CE8] border-gray-300"
                                                        />
                                                        <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                                            Desktop
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input
                                                            id="push-everything"
                                                            name="push-notifications"
                                                            type="radio"
                                                            className="focus:ring-[#679CE8] h-4 w-4 text-[#679CE8] border-gray-300"
                                                        />
                                                        <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                                            Both
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
                                        </div>
                                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-end py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#679CE8] hover:bg-[#4586e1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#679CE8]"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid row">
                                        <button
                                            type="submit"
                                            className="mt-16 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#5ED797] hover:bg-[#28cf76] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5ED797]"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RequestServices