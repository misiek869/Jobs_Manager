import { redirect, useLoaderData } from 'react-router-dom'
import customFetch from '../utils/customFetch'
import { CustomActionError } from '../utils/type'
import { toast } from 'react-toastify'

export const loader = async () => {
	try {
		const response = await customFetch('/users/admin/stats')
		return response
	} catch (error) {
		const customError = error as CustomActionError
		toast.error(customError.response?.data?.msg || 'An error occurred')
		return redirect('/dashboard')
	}
}

const Admin = () => {
	const { users, jobs } = useLoaderData()

	return <div>Admin</div>
}

export default Admin
