import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
	AddJob,
	Admin,
	AllJobs,
	DashboardLayout,
	EditJob,
	Error,
	HomeLayout,
	Landing,
	Login,
	Profile,
	Register,
	Stats,
} from './pages'

import { action as registerAction } from './pages/Register'
import { action as loginAction } from './pages/Login'
import { action as addJobAction } from './pages/AddJob'
import { action as editJobAction } from './pages/EditJob'
import { action as deleteJobAction } from './pages/DeleteJob'

import { loader as dashboardLoader } from './pages/DashboardLayout'
import { loader as getAllJobsLoader } from './pages/AllJobs'
import { loader as getEditJobLoader } from './pages/EditJob'

export const checkDefaultTheme = (): boolean => {
	const isDarkTheme = localStorage.getItem('theme') === 'true'
	document.body.classList.toggle('dark-theme', isDarkTheme)
	return isDarkTheme
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Landing /> },
			{
				path: 'register',
				element: <Register />,
				action: registerAction,
			},
			{
				path: 'login',
				element: <Login />,
				action: loginAction,
			},
			{
				path: 'dashboard',
				element: <DashboardLayout />,
				loader: dashboardLoader,
				children: [
					{
						index: true,
						element: <AddJob />,
						action: addJobAction,
					},
					{ path: 'stats', element: <Stats /> },
					{ path: 'all-jobs', loader: getAllJobsLoader, element: <AllJobs /> },
					{ path: 'profile', element: <Profile /> },
					{ path: 'admin', element: <Admin /> },
					{
						path: 'edit-job/:id',
						loader: getEditJobLoader,
						action: editJobAction,
						element: <EditJob />,
					},
					{ path: 'delete-job/:id', action: deleteJobAction },
				],
			},
		],
	},
])

function App() {
	return <RouterProvider router={router}></RouterProvider>
}

export default App
