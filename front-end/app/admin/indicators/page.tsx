import React from 'react'
import Header from '../users/components/Header'
import IndicatorsPage from './components/IndicatorsPage'

const Indicators = () => {
  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header />
        <div>
          <IndicatorsPage />
        </div>
      </div>
    </div>
  )
}

export default Indicators
