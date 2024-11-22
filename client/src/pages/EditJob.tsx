import customFetch from '../utils/customFetch'

export const loader = async () => {
	try {
		// const data = await customFetch.get('/dashboard/edit-job/')
		// console.log(data)
		return null
	} catch (error) {}
}

export const action = async => {
	return null
}

const EditJob = () => {
	return <div>EditJob</div>
}

export default EditJob
