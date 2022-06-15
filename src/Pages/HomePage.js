import React from 'react'
import HeroSection from '../Components/HeroSection'
import Dashboard from './Dashboard'
import Settings from './Settings'
import OrderSummary from './OrderSummary'
import CheckoutForm from './CheckoutForm'
import ShoppingCart from './ShoppingCart'
import PartOverview from './PartOverview'
import MachinesList from '../Components/MachinesList'
import DocumentsList from './DocumentsList'
import OrderFeed from '../Components/OrderFeed'

function HomePage() {
  return (
    <div>
        {/* <Dashboard /> */}
        {/* <Settings /> */}
        {/* <HeroSection />
        <OrderSummary />
        <CheckoutForm />
        <ShoppingCart />
        <PartOverview />
        <MachinesList />
        <DocumentsList />
        <OrderFeed /> */}
        <div>Hero image</div>
        <div>About</div>
        <div>How it works</div>
        <div>Sign up</div>
    </div>
  )
}

export default HomePage