import Footer from "../General/Footer.js"
import React from 'react'
import CompaniesList from '../../Components/CompaniesList.js'
import Header from '../../Components/Header.js'

function Companies() {
  return (
    <div>
      <Header />
      <CompaniesList />
      <CompaniesList />
      <Footer />
    </div>
  )
}

export default Companies