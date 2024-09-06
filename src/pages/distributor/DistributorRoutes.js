import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Shell from './DistributorShell.js';

import Dashboard from "./Dashboard.js"
import Settings from "./Settings.js"

import OrdersList from './orders/OrdersList.js';
import OrderProfile from './orders/OrderProfile.js';
import OrderInvoice from './orders/OrderInvoice.js';

import Cart from './cart/Cart.js'

import PartProfile from './parts/PartProfile.js';

import ServicesList from './services/ServicesList.js';
import ServiceProfile from './services/ServiceProfile.js';
import ServiceItemProfile from './services/ServiceItemProfile.js';
import ServiceInvoice from './services/ServiceInvoice.js';


import CPGsList from './cpgs/CPGsList.js'
import CPGProfile from './cpgs/CPGProfile.js'

import OEMsList from './oems/OEMsList.js';
import OEMProfile from './oems/OEMProfile.js';



export default function DistributorRoutes() {
    return (
        <Routes>
            <Route element={<Shell />}>

                {/* Dashboard redux: Sales metrics, orders and invoices, client list (based on recent sales interaction) */}
                <Route
                    path="/"
                    element={<Dashboard />}
                />
                <Route
                    path="dashboard"
                    element={<Dashboard />}
                />

                {/* Settings redux: 
                    General - User info, language/date/app settings
                    Notification - controls for alerts and popups
                    Plan - licensing terms and pricing
                    Billing - group payment info
                    Team members - group users mapped
                */}
                <Route
                    path="settings"
                    element={<Settings />}
                />


                {/* Orders */}
                {/* redux: Orders mapped */}
                <Route
                    path="orders"
                    element={<OrdersList />}
                />
                {/* redux: Order id parts and order info mapped */}
                <Route
                    path="order{id}"
                    element={<OrderProfile />}
                />
                {/* redux: order invoice info */}
                <Route
                    path="invoice{id}"
                    element={<OrderInvoice />}
                />

                {/* Carts */}
                {/* redux - cart view */}
                <Route
                    path="cart"
                    element={<Cart />}
                />

                {/* Parts */}
                {/* redux: part id info */}

                <Route
                    path="part{id}"
                    element={<PartProfile />}
                />



                {/* Services */}
                {/* redux: service orders mapped */}

                <Route
                    path="services"
                    element={<ServicesList />}
                />
                {/* redux: service order id info mapped */}
                <Route
                    path="service{id}"
                    element={<ServiceProfile />}
                />
                {/* redux - service item id */}
                <Route
                    path="service_item{id}"
                    element={<ServiceItemProfile />}
                />
                {/* redux - invoice id */}
                <Route
                    path="invoice{id}"
                    element={<ServiceInvoice />}
                />



                {/* My Customers */}
                {/* redux - cpg lsit */}
                <Route
                    path="my_customers"
                    element={<CPGsList />}
                />
                {/* redux - cpg id  */}
                <Route
                    path="cpg{id}"
                    element={<CPGProfile />}
                />


                {/* My OEMs */}
                {/* redux - oem lsit */}
                <Route
                    path="my_oems"
                    element={<OEMsList />}
                />
                {/* redux - oem id  */}
                <Route
                    path="oem{id}"
                    element={<OEMProfile />}
                />

            </Route>

        </Routes>
    )
};
