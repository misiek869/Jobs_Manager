import customFetch from '../utils/customFetch'
import { CustomActionError } from '../utils/type'

export const loader = async () => {
	try {
		const response = await customFetch('/users/admin/stats')
		console.log(response.data)
		return response
	} catch (error) {
		const customError = error as CustomActionError
		// toast.error(customError.response?.data?.msg || 'An error occurred')
		return error
	}
}

const Admin = () => {
	return <div>Admin</div>
}

export default Admin
