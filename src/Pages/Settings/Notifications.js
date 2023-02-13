
import { Fragment, useState } from 'react'
import { Dialog, Switch, Transition } from '@headlessui/react'

const tabs = [
    { name: 'General', href: '#', current: true },
    { name: 'Password', href: '#', current: false },
    { name: 'Notifications', href: '#', current: false },
    { name: 'Plan', href: '#', current: false },
    { name: 'Billing', href: '#', current: false },
    { name: 'Team Members', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Notifications() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)
    const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] = useState(false)

    return (
        <>
            <div className="mt-10 divide-y divide-gray-200">
                <div className="space-y-1">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Emails</h3>
                    <p className="max-w-2xl text-sm text-gray-500">

                    </p>
                </div>
                <div className="mt-6">
                    <dl className="divide-y divide-gray-200">
                        <Switch.Group
                            as="div"
                            className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-gray-200"
                        >
                            <Switch.Label as="dt" className="text-sm font-medium text-gray-500" passive>
                                Order Requests
                            </Switch.Label>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <Switch
                                    checked={autoUpdateApplicantDataEnabled}
                                    onChange={setAutoUpdateApplicantDataEnabled}
                                    className={classNames(
                                        autoUpdateApplicantDataEnabled ? 'bg-[#679CE8]' : 'bg-gray-200',
                                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#679CE8] sm:ml-auto'
                                    )}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            autoUpdateApplicantDataEnabled ? 'translate-x-5' : 'translate-x-0',
                                            'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                        )}
                                    />
                                </Switch>
                            </dd>
                        </Switch.Group>

                        <Switch.Group
                            as="div"
                            className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-gray-200"
                        >
                            <Switch.Label as="dt" className="text-sm font-medium text-gray-500" passive>
                                Order Being Shipped
                            </Switch.Label>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <Switch
                                    checked={autoUpdateApplicantDataEnabled}
                                    onChange={setAutoUpdateApplicantDataEnabled}
                                    className={classNames(
                                        autoUpdateApplicantDataEnabled ? 'bg-[#679CE8]' : 'bg-gray-200',
                                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#679CE8] sm:ml-auto'
                                    )}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            autoUpdateApplicantDataEnabled ? 'translate-x-5' : 'translate-x-0',
                                            'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                        )}
                                    />
                                </Switch>
                            </dd>
                        </Switch.Group>
                        
                        <Switch.Group
                            as="div"
                            className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-gray-200"
                        >
                            <Switch.Label as="dt" className="text-sm font-medium text-gray-500" passive>
                                Order Arriving
                            </Switch.Label>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <Switch
                                    checked={autoUpdateApplicantDataEnabled}
                                    onChange={setAutoUpdateApplicantDataEnabled}
                                    className={classNames(
                                        autoUpdateApplicantDataEnabled ? 'bg-[#679CE8]' : 'bg-gray-200',
                                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#679CE8] sm:ml-auto'
                                    )}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            autoUpdateApplicantDataEnabled ? 'translate-x-5' : 'translate-x-0',
                                            'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                        )}
                                    />
                                </Switch>
                            </dd>
                        </Switch.Group>
                    </dl>
                </div>
            </div>

            <div className="mt-10 divide-y divide-gray-200">
                <div className="space-y-1">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Desktop</h3>
                    <p className="max-w-2xl text-sm text-gray-500">

                    </p>
                </div>
                <div className="mt-6">
                    <dl className="divide-y divide-gray-200">
                        <Switch.Group
                            as="div"
                            className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-gray-200"
                        >
                            <Switch.Label as="dt" className="text-sm font-medium text-gray-500" passive>
                                Order Requests
                            </Switch.Label>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <Switch
                                    checked={autoUpdateApplicantDataEnabled}
                                    onChange={setAutoUpdateApplicantDataEnabled}
                                    className={classNames(
                                        autoUpdateApplicantDataEnabled ? 'bg-[#679CE8]' : 'bg-gray-200',
                                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#679CE8] sm:ml-auto'
                                    )}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            autoUpdateApplicantDataEnabled ? 'translate-x-5' : 'translate-x-0',
                                            'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                        )}
                                    />
                                </Switch>
                            </dd>
                        </Switch.Group>

                        <Switch.Group
                            as="div"
                            className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-gray-200"
                        >
                            <Switch.Label as="dt" className="text-sm font-medium text-gray-500" passive>
                                Order Being Shipped
                            </Switch.Label>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <Switch
                                    checked={autoUpdateApplicantDataEnabled}
                                    onChange={setAutoUpdateApplicantDataEnabled}
                                    className={classNames(
                                        autoUpdateApplicantDataEnabled ? 'bg-[#679CE8]' : 'bg-gray-200',
                                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#679CE8] sm:ml-auto'
                                    )}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            autoUpdateApplicantDataEnabled ? 'translate-x-5' : 'translate-x-0',
                                            'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                        )}
                                    />
                                </Switch>
                            </dd>
                        </Switch.Group>
                        
                        <Switch.Group
                            as="div"
                            className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-gray-200"
                        >
                            <Switch.Label as="dt" className="text-sm font-medium text-gray-500" passive>
                                Order Arriving
                            </Switch.Label>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <Switch
                                    checked={autoUpdateApplicantDataEnabled}
                                    onChange={setAutoUpdateApplicantDataEnabled}
                                    className={classNames(
                                        autoUpdateApplicantDataEnabled ? 'bg-[#679CE8]' : 'bg-gray-200',
                                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#679CE8] sm:ml-auto'
                                    )}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            autoUpdateApplicantDataEnabled ? 'translate-x-5' : 'translate-x-0',
                                            'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                        )}
                                    />
                                </Switch>
                            </dd>
                        </Switch.Group>
                    </dl>
                </div>
            </div>

            <div className="mt-10 divide-y divide-gray-200">
                <div className="space-y-1">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Texts</h3>
                    <p className="max-w-2xl text-sm text-gray-500">

                    </p>
                </div>
                <div className="mt-6">
                    <dl className="divide-y divide-gray-200">
                        <Switch.Group
                            as="div"
                            className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-gray-200"
                        >
                            <Switch.Label as="dt" className="text-sm font-medium text-gray-500" passive>
                                Order Requests
                            </Switch.Label>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <Switch
                                    checked={autoUpdateApplicantDataEnabled}
                                    onChange={setAutoUpdateApplicantDataEnabled}
                                    className={classNames(
                                        autoUpdateApplicantDataEnabled ? 'bg-[#679CE8]' : 'bg-gray-200',
                                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#679CE8] sm:ml-auto'
                                    )}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            autoUpdateApplicantDataEnabled ? 'translate-x-5' : 'translate-x-0',
                                            'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                        )}
                                    />
                                </Switch>
                            </dd>
                        </Switch.Group>

                        <Switch.Group
                            as="div"
                            className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-gray-200"
                        >
                            <Switch.Label as="dt" className="text-sm font-medium text-gray-500" passive>
                                Order Being Shipped
                            </Switch.Label>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <Switch
                                    checked={autoUpdateApplicantDataEnabled}
                                    onChange={setAutoUpdateApplicantDataEnabled}
                                    className={classNames(
                                        autoUpdateApplicantDataEnabled ? 'bg-[#679CE8]' : 'bg-gray-200',
                                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#679CE8] sm:ml-auto'
                                    )}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            autoUpdateApplicantDataEnabled ? 'translate-x-5' : 'translate-x-0',
                                            'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                        )}
                                    />
                                </Switch>
                            </dd>
                        </Switch.Group>
                        
                        <Switch.Group
                            as="div"
                            className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-gray-200"
                        >
                            <Switch.Label as="dt" className="text-sm font-medium text-gray-500" passive>
                                Order Arriving
                            </Switch.Label>
                            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <Switch
                                    checked={autoUpdateApplicantDataEnabled}
                                    onChange={setAutoUpdateApplicantDataEnabled}
                                    className={classNames(
                                        autoUpdateApplicantDataEnabled ? 'bg-[#679CE8]' : 'bg-gray-200',
                                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#679CE8] sm:ml-auto'
                                    )}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            autoUpdateApplicantDataEnabled ? 'translate-x-5' : 'translate-x-0',
                                            'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                        )}
                                    />
                                </Switch>
                            </dd>
                        </Switch.Group>
                    </dl>
                </div>
            </div>
        </>
    )
}

export default Notifications