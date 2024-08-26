import React, { useState, Fragment } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid'


const companys = [
  {
    name: 'Doverco',
    service: [
      { name: 'Pill Packer', date: '4/20/2024', description: 'Look into electrical components', status: 'Scheduled' },
      { name: 'Stretch Wrapper', date: '4/9/2024', description: 'Fixed the plastic dispensar alginment', status: 'Finished' },
      { name: 'Conveyor', date: '4/1/2024', description: 'worked on conveyor rolling speed', status: 'Finished' },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function ServicesList() {
  const [toggleState, setToggleState] = useState('Request for Service');

  const handleToggleChange = () => {
    setToggleState((prevState) => (prevState === 'Request for Service' ? 'View History' : 'Request for Service'));
  };

  return (
    <div className="m-8 px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Services</h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <div className="flex items-center">
            <button
              type="button"
              className={`block rounded-md px-3 py-2 text-center text-sm font-semibold shadow-sm focus:outline-none ${toggleState === 'Request for Service' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={handleToggleChange}
            >
              Request for Service
            </button>
            <button
              type="button"
              className={`block rounded-md ml-2 px-3 py-2 text-center text-sm font-semibold shadow-sm focus:outline-none ${toggleState === 'View History' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={handleToggleChange}
            >
              View History
            </button>
          </div>
        </div>
      </div>

      {toggleState === 'Request for Service' && (
        <form>
          <div className="space-y-12">
            <div className="pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                <div className="col-span-full">
                  <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                    Details
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                      placeholder="Write a few sentences about the issue..."
                    />
                  </div>
                </div>


                <div className="col-span-full">
                  <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                    Upload files
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send
            </button>
          </div>
        </form>
      )}

      {toggleState === 'View History' && (
        <div className="flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full">
                <tbody className="bg-white">
                  <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full">
                          <thead className="bg-white">
                            <tr>
                              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                Machine
                              </th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Date
                              </th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Description
                              </th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Status
                              </th>
                              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                                <span className="sr-only">View</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white">
                            {companys.map((company) => (
                              <Fragment key={company.name}>
                                <tr className="border-t border-gray-200">
                                  <th
                                    colSpan={5}
                                    scope="colgroup"
                                    className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                                  >
                                    {company.name}
                                  </th>
                                </tr>
                                {company.service.map((service, serviceIdx) => (
                                  <tr
                                    key={service.description}
                                    className={classNames(serviceIdx === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t')}
                                  >
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                      {service.name}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{service.date}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{service.description}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{service.status}</td>
                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                                      <a href="/cpg/service{id}" className="text-indigo-600 hover:text-indigo-900">
                                        View<span className="sr-only">, {service.name}</span>
                                      </a>
                                    </td>
                                  </tr>
                                ))}
                              </Fragment>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesList;