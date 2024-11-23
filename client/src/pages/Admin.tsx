import { redirect, useLoaderData } from 'react-router-dom'
import customFetch from '../utils/customFetch'
import { CustomActionError } from '../utils/type'
import { toast } from 'react-toastify'
import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa'
import { StatItem } from '../components'

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

	return (
		<>
			<StatItem
				title='current users'
				count={users}
				color=''
				bcg=''
				icon={<FaSuitcaseRolling />}
			/>
			<StatItem
				title='total jobs'
				count={jobs}
				color=''
				bcg=''
				icon={<FaSuitcaseRolling />}
			/>
		</>
	)
}

export default Admin
