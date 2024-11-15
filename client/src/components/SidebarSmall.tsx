import { FaTimes } from 'react-icons/fa'
import { useDashboardContext } from '../pages/DashboardLayout'
import Logo from './Logo'
import NavLinks from './NavLinks'

const SidebarSmall = () => {
	const { showSidebar, toggleSidebar } = useDashboardContext()

	const sidebarContainerStyles =
		'fixed inset-0 bg-white flex justify-center items-center -z-10 opacity-0 duration-300 visible'

	return (
		<aside className='lg:hidden'>
			<div
				className={
					showSidebar
						? `${sidebarContainerStyles} z-50 opacity-90 visible`
						: `${sidebarContainerStyles}`
				}>
				<div className=' w-[90vw] h-[95vh] rounded-sm py-16 px-8 relative flex items-center flex-col'>
					<button
						type='button'
						className='absolute top-3 right-3 bg-transparent text-2xl cursor-pointer text-red-800'
						onClick={toggleSidebar}>
						<FaTimes />
					</button>
					<header>
						<Logo />
					</header>
					<NavLinks isBigSidebar />
				</div>
			</div>
		</aside>
	)
}

export default SidebarSmall
