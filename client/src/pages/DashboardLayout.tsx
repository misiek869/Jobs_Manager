import { createContext, useContext, useState } from 'react'
import { Outlet, redirect, useNavigate } from 'react-router-dom'
import { Navbar, SidebarBig, SidebarSmall } from '../components'
import { checkDefaultTheme } from '../App'
import { json } from 'react-router-dom'
import customFetch from '../utils/customFetch'
import { useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'

export const loader = async (): Promise<{ user: User }> => {
	try {
		const { data } = await customFetch.get('/users/current-user')
		return data
	} catch (error) {
		return redirect('/')
	}
}

type User = {
	_id: string
	name: string
	email: string
	lastName: string
	location: string
	role: string
}

type DashboardContextType = {
	user: User | null
	showSidebar: boolean
	isDarkTheme: boolean
	toggleDarkTheme: () => void
	toggleSidebar: () => void
	logoutUser: () => Promise<void>
	setIsDarkTheme: (value: boolean) => void
}

const defaultContextValue: DashboardContextType = {
	user: null,
	showSidebar: false,
	isDarkTheme: false,
	toggleDarkTheme: () => {},
	toggleSidebar: () => {},
	logoutUser: () => {},
	setIsDarkTheme: () => {},
}

const DashboardContext = createContext(defaultContextValue)

const DashboardLayout = () => {
	const { user } = useLoaderData() as { user: User }
	const navigate = useNavigate()
	const [showSidebar, setShowSidebar] = useState<boolean>(false)
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(checkDefaultTheme())

	const toggleDarkTheme = () => {
		const newDarkTheme = !isDarkTheme
		setIsDarkTheme(newDarkTheme)

		document.body.classList.toggle('dark-theme', newDarkTheme)

		localStorage.setItem('theme', newDarkTheme.toString())
	}

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar)
	}

	const logoutUser = async () => {
		navigate('/')
		await customFetch.get('/auth/logout')
		toast.success('Logged Out')
	}

	return (
		<DashboardContext.Provider
			value={{
				user,
				showSidebar,
				isDarkTheme,
				toggleDarkTheme,
				toggleSidebar,
				logoutUser,
				setIsDarkTheme,
			}}>
			<section>
				<main className='grid grid-cols-[1fr] lg:grid-cols-[auto,1fr] bg-slate-50'>
					<SidebarSmall />
					<SidebarBig />
					<div>
						<Navbar />
						<div className='w-[90vw] mx-auto py-8 lg:w-[90%]'>
							<Outlet context={{ user }} />
						</div>
					</div>
				</main>
			</section>
		</DashboardContext.Provider>
	)
}

export const useDashboardContext = () => useContext(DashboardContext)

export default DashboardLayout
