import Header from '@/app/admin/users/components/Header'
import React from 'react'
import CalculatorPage from './components/CalculatorPage'

const AdminPanelItem = () => {
  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header />
        <div className="mt-4">
          <CalculatorPage />
        </div>
      </div>
    </div>
  )
}

export default AdminPanelItem
