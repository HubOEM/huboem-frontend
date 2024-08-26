import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchParts } from '../../../services/partService';

function PartsList() {
    const [toggleState, setToggleState] = useState('Place Order');
    const dispatch = useDispatch();

    // Get user parts from Redux state, use an empty array as fallback to avoid error
    const userParts = useSelector((state) => state.parts?.userParts ?? []);

    // Fetch parts when the component mounts
    useEffect(() => {
        dispatch(fetchParts());
    }, [dispatch]);

    const handleToggleChange = () => {
        setToggleState((prevState) => (prevState === 'Place Order' ? 'Order History' : 'Place Order'));
    };


  return (
    <>
      <div className="mt-8 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Parts</h1>
            <p className="mt-2 text-sm text-gray-700">
              This is a master view of all the parts you have across your machines' profiles.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <div className="flex items-center">
              <button
                type="button"
                className={`block rounded-md px-3 py-2 text-center text-sm font-semibold shadow-sm focus:outline-none ${toggleState === 'Place Order' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={handleToggleChange}
              >
                Place Order
              </button>
              <button
                type="button"
                className={`block rounded-md ml-2 px-3 py-2 text-center text-sm font-semibold shadow-sm focus:outline-none ${toggleState === 'Order History' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={handleToggleChange}
              >
                Order History
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              {toggleState === 'Place Order' ? (
                <table className="min-w-full divide-y divide-gray-300">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                        >
                          Part ID
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                        >
                          Name
                        </th>

                        <th
                          scope="col"
                          className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Company
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Machine Serial
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Lead Days
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Net amount
                        </th>
                        <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0">
                          <span className="sr-only">Add to Cart</span>
                        </th>
                        <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0">
                          <span className="sr-only">More Info</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-gray-50">
                      {userParts.map((part) => (
                        <tr key={part.id}>
                          <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">{part.manufacturer_id}</td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                            {part.name}
                          </td>
                          <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">{part.vendor_name}</td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{part.manufacturer_id}</td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{part.orderLeadTime}</td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{part.orderPricePerUnit}</td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{part.orderMinQuantity}</td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{part.netAmount}</td>
                          <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-center text-sm font-medium sm:pr-0">
                            <a href="/cpg/cart" className="text-indigo-600 hover:text-indigo-900 lg:mr-12 mr-5">
                              Add to Cart<span className="sr-only">, {part.id}</span>
                            </a>
                            <a href="/cpg/part{id}" className="text-indigo-600 hover:text-indigo-900">
                              More Info<span className="sr-only">, {part.id}</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </table>
              )
                :
                (
                  <table className="min-w-full divide-y divide-gray-300">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                          >
                            Order Date
                          </th>
                          <th
                            scope="col"
                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Company
                          </th>
                          <th
                            scope="col"
                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Machine Serial
                          </th>
                          <th
                            scope="col"
                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Quantity
                          </th>
                          <th
                            scope="col"
                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Net amount
                          </th>
                          <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0">
                            <span className="sr-only">View</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-gray-50">
                        {userParts.map((part) => (
                          <tr key={part.id}>
                            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">{part.id}</td>
                            <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                              {part.vendor_name}
                            </td>
                            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{part.manufacturer_id}</td>
                            {/* <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{part.orderLeadTime}</td> */}
                            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{part.orderPricePerUnit}</td>
                            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{part.orderMinQuantity}</td>
                            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{part.netAmount}</td>
                            <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-center text-sm font-medium sm:pr-0">
                              <a href="/cpg/order{id}" className="text-indigo-600 hover:text-indigo-900">
                                View<span className="sr-only">, {part.id}</span>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </table>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PartsList;
