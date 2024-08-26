import { Fragment } from 'react'

const companys = [
  {
    name: 'Doverco',
    orders: [
      { date: '4/1/2024', number: '1542', from: 'Kelloggs', machine_model: 'Wrapper', machine_serial: '999', price: '$900.23', href: 'order{id}' },
      { date: '3/31/2024', number: '25213', from: 'Nestle', machine_model: 'Conveyor', machine_serial: '888', price: '$203.10', href: 'order{id}' },
      { date: '3/30/2024', number: '3127', from: 'Coors', machine_model: 'Packer', machine_serial: '777', price: '$1,203.93', href: 'order{id}' },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function OrdersList() {
  return (
    <div className="sm:p-6 lg:p-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Orders</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          {/* <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button> */}
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full">
              <thead className="bg-white">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                    Order Date
                  </th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                    Order Number
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Sender
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Machine Model
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Machine Number
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Price
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                    <span className="sr-only">Edit</span>
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
                    {company.orders.map((order, orderIdx) => (
                      <tr
                        key={order.number}
                        className={classNames(orderIdx === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t')}
                      >
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">{order.date} </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{order.number}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{order.from}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{order.machine_model}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{order.machine_serial}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{order.price}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                          <a href={order.href} className="text-indigo-600 hover:text-indigo-900">
                            View<span className="sr-only">, {order.number}</span>
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
    </div>
  )
}

export default OrdersList;