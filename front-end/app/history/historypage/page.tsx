import Header from '@/app/admin/users/components/Header'
import React from 'react'
import HistoryPage from './Components/HistoryPage'

const history = () => {
  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header />
        <div className="mt-4">
					<HistoryPage />
        </div>
      </div>
    </div>
  )
}

export default history;
