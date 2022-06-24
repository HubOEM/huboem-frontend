import { ChevronDownIcon } from '@heroicons/react/solid'

const orders = [
  {
    number: 'WU88191111',
    date: 'January 22, 2021',
    datetime: '2021-01-22',
    invoiceHref: 'Order_Details',
    total: (70*2*2),
    products: [
      {
        id: 1,
        name: 'Ball and joint',
        href: 'View_Part',
        price: 70.00,
        quantity: 2,
        status: 'Delivered Jan 25, 2021',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg',
        imageAlt: 'Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip.',
      },
      {
        id: 2,
        name: 'Gear',
        href: 'View_Part',
        price: 70.00,
        quantity: 2,
        status: 'Delivered Jan 25, 2021',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg',
        imageAlt: 'Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip.',
      },
    ],
  },
  {
    number: 'UE897HE78',
    date: 'January 2, 2021',
    datetime: '2021-01-02',
    invoiceHref: 'View_Part',
    total: (70*2),
    products: [
      {
        id: 1,
        name: 'Pen',
        href: '#',
        price: 70.00,
        quantity: 2,
        status: 'Delivered Jan 25, 2021',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg',
        imageAlt: 'Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip.',
      },
    ],
  },
  {
    number: 'DDD9029DIO90D',
    date: 'December 22, 2020',
    datetime: '2020-12-22',
    invoiceHref: '#',
    total: (70*2),
    products: [
      {
        id: 1,
        name: 'Motor',
        href: '#',
        price: 70.00,
        quantity: 2,
        status: 'Delivered Jan 25, 2021',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-02-product-01.jpg',
        imageAlt: 'Detail of mechanical pencil tip with machined black steel shaft and chrome lead tip.',
      },
    ],
  },
]

function OrderHistory() {
  return (
    <>
      <div className="min-h-full pb-24 pl-24 pr-24">
        <div className="lg:pl-64 flex flex-col flex-1">
          <div className="bg-white">
            {/* <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
              <div className="max-w-xl">
                <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                  Order History
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
          <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:pb-24 lg:px-8">
              <div className="max-w-xl">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Order History</h1>
                <p className="mt-2 text-sm text-gray-500">
                  Check the status of recent orders, manage returns, and download invoices.
                </p>
              </div>

              <div className="mt-16">
                <h2 className="sr-only">Recent orders</h2>

                <div className="space-y-20">
                  {orders.map((order) => (
                    <div key={order.number}>
                      <h3 className="sr-only">
                        Order placed on <time dateTime={order.datetime}>{order.date}</time>
                      </h3>

                      <div className="bg-gray-50 border border-[#5ED797] rounded-lg py-6 px-4 sm:px-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 lg:space-x-8">
                        <dl className="divide-y divide-gray-200 space-y-6 text-sm text-gray-600 flex-auto sm:divide-y-0 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8">
                          <div className="flex justify-between sm:block">
                            <dt className="font-medium text-gray-900">Date placed</dt>
                            <dd className="sm:mt-1">
                              <time dateTime={order.datetime}>{order.date}</time>
                            </dd>
                          </div>
                          <div className="flex justify-between pt-6 sm:block sm:pt-0">
                            <dt className="font-medium text-gray-900">Order number</dt>
                            <dd className="sm:mt-1">{order.number}</dd>
                          </div>
                          <div className="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
                            <dt>Total amount</dt>
                            <dd className="sm:mt-1">${order.total}</dd>
                          </div>
                        </dl>
                        <a
                          href={order.invoiceHref}
                          className="shadow-apple w-full flex items-center justify-center bg-[#679de8b1] mt-6 py-2 px-4 border border-[#679CE8] rounded-md text-sm font-medium text-gray-700 hover:bg-[#679de8e0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#679CE8] sm:w-auto sm:mt-0"
                        >
                          View Invoice
                          <span className="sr-only">for order {order.number}</span>
                        </a>
                      </div>

                      <table className="mt-4 w-full text-gray-500 sm:mt-6">
                        <caption className="sr-only">Products</caption>
                        <thead className="sr-only text-sm text-gray-500 text-left sm:not-sr-only">
                          <tr>
                            <th scope="col" className="sm:w-2/5 lg:w-1/3 pr-8 py-3 font-normal">
                              Product
                            </th>
                            <th scope="col" className="hidden w-1/5 pr-8 py-3 font-normal sm:table-cell">
                              Price/Unit
                            </th>
                            <th scope="col" className="hidden w-1/5 pr-8 py-3 font-normal sm:table-cell">
                              Quantity
                            </th>
                            <th scope="col" className="hidden w-1/5 pr-8 py-3 font-normal sm:table-cell">
                              Total
                            </th>
                            <th scope="col" className="hidden pr-8 py-3 font-normal sm:table-cell">
                              Status
                            </th>
                            <th scope="col" className="w-0 py-3 font-normal text-right">
                              Info
                            </th>
                          </tr>
                        </thead>
                        <tbody className="border-b border-gray-200 divide-y divide-gray-200 text-sm sm:border-t">
                          {order.products.map((product) => (
                            <tr key={product.id}>
                              <td className="py-6 pr-8">
                                <div className="flex items-center">
                                  <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="w-16 h-16 object-center object-cover rounded mr-6"
                                  />
                                  <div>
                                    <div className="font-medium text-gray-900">{product.name}</div>
                                    <div className="mt-1 sm:hidden">${product.price}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="hidden py-6 pr-8 sm:table-cell">${product.price}</td>
                              <td className="hidden py-6 pr-8 sm:table-cell">{product.quantity}</td>
                              <td className="hidden py-6 pr-8 sm:table-cell">${product.price * product.quantity}</td>
                              <td className="hidden py-6 pr-8 sm:table-cell">{product.status}</td>
                              <td className="py-6 font-medium text-right whitespace-nowrap">
                                <a href={product.href} className="text-[#679CE8]">
                                  View<span className="hidden lg:inline"> Product</span>
                                  <span className="sr-only">, {product.name}</span>
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default OrderHistory