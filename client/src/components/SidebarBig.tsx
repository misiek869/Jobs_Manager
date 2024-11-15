import NavLinks from './NavLinks'
import Logo from './Logo'
import { useDashboardContext } from '../pages/DashboardLayout'

const SidebarBig = () => {
	const { showSidebar } = useDashboardContext()

	const sidebarContainerStyles =
		'bg-white min-h-screen h-full w-[250px] ml-[-250px] duration-300'

	return (
		<aside className='text-xl border-r hidden lg:block'>
			<div
				className={
					showSidebar
						? `${sidebarContainerStyles} `
						: `${sidebarContainerStyles} lg:ml-0`
				}>
				<div className='sticky top-0'>
					<header className='h-24 flex items-center justify-center'>
						<Logo />
					</header>
					<NavLinks isBigSidebar />
				</div>
			</div>
		</aside>
	)
}

export default SidebarBig
