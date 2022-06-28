import logo from '../Images/huboem logo.jpeg'
import { Fragment, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  ChatAlt2Icon,
  ClockIcon,
  CogIcon,
  DocumentTextIcon,
  HomeIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon,
  QrcodeIcon,
  XIcon,
} from '@heroicons/react/outline'

const dashboard = [
  { name: 'Dashboard', icon: HomeIcon, current: false, href: 'Dashboard' },
]
const navigation = [
  {
    name: 'Parts',
    icon: QrcodeIcon,
    current: false,
    children: [
      { name: 'Place an Order', href: 'Order_Parts' },
      { name: 'Order History', href: 'Parts_Order_History' },
      { name: 'Recurring Orders', href: 'Recurring_Parts' },
    ],
  },
  {
    name: 'Services',
    icon: ClockIcon,
    current: false,
    children: [
      { name: 'Request Services', href: 'Request_Services' },
      { name: 'Services History', href: 'Services_History' },
      { name: 'Services Calendar', href: 'Services_Calendar' },
    ],
  },
  {
    name: 'Documents',
    icon: DocumentTextIcon,
    current: false,
    children: [
      { name: 'View Documents', href: 'View_Documents' },
      { name: 'Add Documents', href: 'Add_Documents' },
    ],
  },
]
const secondaryNavigation = [
  { name: 'Machines', icon: HomeIcon, current: false, href: 'Machines' },

  {
    name: 'OEMs',
    icon: UserGroupIcon,
    current: false,
    children: [
      { name: 'Companies', href: 'OEM_Companies' },
      { name: 'Contacts', href: 'OEM_Contacts' },
    ],
  },
  {
    name: 'Messages',
    icon: ChatAlt2Icon,
    current: false,
    children: [
      { name: 'New Message', href: 'New_Messages' },
      { name: 'View Messages', href: 'View_Messages' },
      { name: 'Contact Admin', href: 'Contact_Admin' },
    ],
  },
]
const tertiaryNavigation = [
  { name: 'Profile', href: 'Profile', icon: CogIcon },
  { name: 'FAQ', href: 'FAQ', icon: QuestionMarkCircleIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div className="min-h-full">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-cyan-700">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="h-24 w-100 flex-auto"
                      src={logo}
                      alt="Easywire logo"
                    />
                  </div>
                  <nav
                    className="mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto"
                    aria-label="Sidebar"
                  >
                    <div className="px-2 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          className={classNames(
                            item.current
                              ? 'bg-cyan-800 text-white'
                              : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200" aria-hidden="true" />
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="mt-6 pt-6">
                      <div className="px-2 space-y-1">
                        {secondaryNavigation.map((item) => (
                          <a
                            key={item.name}
                            className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
                          >
                            <item.icon className="mr-4 h-6 w-6 text-cyan-200" aria-hidden="true" />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </nav>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow border-r border-gray-200 pb-4 bg-white overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="h-24 w-100 flex-auto"
                src={logo}
                alt="Workflow"
              />
            </div>
            <div className="mt-5 flex-grow flex flex-col">
              <nav className="flex-1 px-2 space-y-1 bg-white" aria-label="Sidebar">
                <div>
                  {dashboard.map((item) =>
                    !item.children ? (
                      <div key={item.name} className='py-2'>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                            ? 'bg-gray-100 text-gray-900'
                            : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#679CE8]'
                    )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                              'mr-3 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </div>
                    ) : (
                      <Disclosure as="div" key={item.name} className="space-y-1 my-1">
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={classNames(
                                item.current
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#679CE8]'
                              )}
                            >
                              <item.icon
                                className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              <span className="flex-1">{item.name}</span>
                              <svg
                                className={classNames(
                                  open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                                  'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                                )}
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                              </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="space-y-1">
                              {item.children.map((subItem) => (
                                <Disclosure.Button
                                  key={subItem.name}
                                  as="a"
                                  href={subItem.href}
                                  className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                // group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#679CE8]

                                >
                                  {subItem.name}
                                </Disclosure.Button>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    )
                  )}
                </div>
                <div className='my-4 pt-4 border-t border-gray-200'>
                  {navigation.map((item) =>
                    !item.children ? (
                      <div key={item.name} className='py-2'>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                            ? 'bg-gray-100 text-gray-900'
                            : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#679CE8]'
                    )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                              'mr-3 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </div>
                    ) : (
                      <Disclosure as="div" key={item.name} className="space-y-1 my-1">
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={classNames(
                                item.current
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#679CE8]'
                              )}
                            >
                              <item.icon
                                className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              <span className="flex-1">{item.name}</span>
                              <svg
                                className={classNames(
                                  open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                                  'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                                )}
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                              </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="space-y-1">
                              {item.children.map((subItem) => (
                                <Disclosure.Button
                                  key={subItem.name}
                                  as="a"
                                  href={subItem.href}
                                  className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                // group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#679CE8]

                                >
                                  {subItem.name}
                                </Disclosure.Button>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    )
                  )}
                </div>
                <div className='my-4 pt-4 border-t border-gray-200'>
                  {secondaryNavigation.map((item) =>
                    !item.children ? (
                      <div key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                            ? 'bg-gray-100 text-gray-900'
                            : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#679CE8]'
                    )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                              'mr-3 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </div>
                    ) : (
                      <Disclosure as="div" key={item.name} className="space-y-1 my-1">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current
                                ? 'bg-gray-100 text-gray-900'
                                : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                              'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#679CE8]'
                            )}
                          >
                            <item.icon
                              className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            <span className="flex-1">{item.name}</span>
                            <svg
                              className={classNames(
                                open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                                'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                              )}
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                            </svg>
                          </Disclosure.Button>
                          <Disclosure.Panel className="space-y-1">
                            {item.children.map((subItem) => (
                              <Disclosure.Button
                                key={subItem.name}
                                as="a"
                                href={subItem.href}
                                className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                // group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#679CE8]

                              >
                                {subItem.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    )
                  )}
                </div>
                <div className='my-4 pt-4 border-t border-gray-200'>
                  {tertiaryNavigation.map((item) =>
                    !item.children ? (
                      <div key={item.name} className='my-1'>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                            ? 'bg-gray-100 text-gray-900'
                            : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#679CE8]'
                    )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                              'mr-3 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </div>
                    ) : (
                      <Disclosure as="div" key={item.name} className="space-y-1 my-1">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current
                                ? 'bg-gray-100 text-gray-900'
                                : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                              'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#679CE8]'
                            )}
                          >
                            <item.icon
                              className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            <span className="flex-1">{item.name}</span>
                            <svg
                              className={classNames(
                                open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                                'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                              )}
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                            </svg>
                          </Disclosure.Button>
                          <Disclosure.Panel className="space-y-1">
                            {item.children.map((subItem) => (
                              <Disclosure.Button
                                key={subItem.name}
                                as="a"
                                href={subItem.href}
                                className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                // group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#679CE8]

                              >
                                {subItem.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    )
                  )}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar