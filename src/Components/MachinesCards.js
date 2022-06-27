/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'

const people = [
  {
    name: 'B229',
    title: 'FILTEC',
    role: 'Filler',
    hrefOrderParts: 'Order_Parts',
    hrefRequestServices: 'Request_Services',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: '678DD',
    title: 'Pro Mach',
    role: 'Admin',
    hrefOrderParts: 'Order_Parts',
    hrefRequestServices: 'Request_Services',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: '777QED',
    title: 'Douglas',
    role: 'Admin',
    hrefOrderParts: 'Order_Parts',
    hrefRequestServices: 'Request_Services',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: '678DDD',
    title: 'AES',
    role: 'Admin',
    hrefOrderParts: 'Order_Parts',
    hrefRequestServices: 'Request_Services',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: '099-Z89',
    title: 'Inline',
    role: 'Admin',
    hrefOrderParts: 'Order_Parts',
    hrefRequestServices: 'Request_Services',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'BB-99-z',
    title: 'Omega',
    role: 'Admin',
    hrefOrderParts: 'Order_Parts',
    hrefRequestServices: 'Request_Services',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'BB-99-r',
    title: 'Omega',
    role: 'Admin',
    hrefOrderParts: 'Order_Parts',
    hrefRequestServices: 'Request_Services',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]

function MachinesCards() {
  return (
    <div className="min-h-full px-32 pt-16 pb-16">
      <div className="lg:pl-64 flex flex-col flex-1">
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => (
            <li key={person.hrefOrderParts} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
              <a href="Machine">
                <div className="w-full flex items-center justify-between p-6 space-x-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-medium truncate">{person.name}</h3>
                      <span className="flex-shrink-0 inline-block px-2 py-0.5 text-[#5ED797] text-xs font-medium bg-green-100 rounded-full">
                        {person.role}
                      </span>
                    </div>
                    <p className="mt-1 text-gray-500 text-sm truncate">{person.title}</p>
                  </div>
                  <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src={person.imageUrl} alt="" />
                </div>
              </a>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="w-0 flex-1 flex">
                    <a
                      href={`${person.hrefOrderParts}`}
                      className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                    >
                      <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-3">Order Parts</span>
                    </a>
                  </div>
                  <div className="-ml-px lg:pl-3 w-0 flex-1 flex">
                    <a
                      href={`${person.hrefRequestServices}`}
                      className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                    >
                      <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-3">Request Services</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MachinesCards