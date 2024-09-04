import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import ManualList from './components/ManualList'

export default async function ManualLayout({children}: {children: React.ReactNode  }) {
	return (
		<Sidebar>
		<div className='h-full'>
			<ManualList />
			{children}
		</div>
		</Sidebar>
	)
}
