import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Shell from './DistributorShell';

import Dashboard from "./Dashboard"
import Settings from "./Settings"

import OrdersList from './orders/OrdersList';
import OrderProfile from './orders/OrderProfile';
import OrderInvoice from './orders/OrderInvoice';

import Cart from './cart/Cart'

import PartProfile from './parts/PartProfile';

import ServicesList from './services/ServicesList';
import ServiceProfile from './services/ServiceProfile';
import ServiceItemProfile from './services/ServiceItemProfile';
import ServiceInvoice from './services/ServiceInvoice';


import CPGsList from './cpgs/CPGsList'
import CPGProfile from './cpgs/CPGProfile'

import OEMsList from './oems/OEMsList';
import OEMProfile from './oems/OEMProfile';



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