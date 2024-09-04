import React from 'react'
import Users from './components/Users'
import Header from './components/Header'

const AdminPanelItem = () => {
  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header />
        <div className="mt-4">
          <Users />
        </div>
      </div>
    </div>
  )
}

export default AdminPanelItem
