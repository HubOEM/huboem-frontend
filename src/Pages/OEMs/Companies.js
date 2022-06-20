
import React from 'react'
import CompaniesList from '../../Components/CompaniesList.js'
import Header from '../../Components/Header.js'

function Companies() {
  const companies = "Companies"
  const description = "A list of the companies you do business with, including materials suppliers. "

  return (
    <div>
      <Header title={companies} description={description} />
      <CompaniesList />
      <CompaniesList />
    </div>
  )
}

export default Companies