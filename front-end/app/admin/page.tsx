import React from 'react'
import EmptyState from '../components/EmptyState'
// import UsersPage from './components/UsersPage'

const page = () => {
	return (
		<div className='hidden h-full lg:block lg:pl-80'>
			{/* <UsersPage /> */}
			<EmptyState />
		</div>
	)
}

export default page
