import Sidebar from '../components/sidebar/Sidebar'
import AdminList from './components/AdminList'

export default function AdminLayout({ children }: { children: React.ReactNode })  {
	return (
		<Sidebar>
			<div className='h-full'>
				<AdminList />
				{children}
			</div>
		</Sidebar>
	)
}
