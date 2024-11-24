import {
	Form,
	redirect,
	useNavigation,
	useOutletContext,
} from 'react-router-dom'
import { UserType } from '../utils/type'
import { FormRow } from '../components'
import { ActionFunctionArgs } from 'react-router-dom'
import { toast } from 'react-toastify'
import customFetch from '../utils/customFetch'
import { CustomActionError } from '../utils/type'

type UserContext = {
	user: UserType
}

export const action = async ({ request }: ActionFunctionArgs) => {
	const formData = await request.formData()
	const file = formData.get('avatar')

	if (file instanceof File && file.size > 500000) {
		toast.error('Image size too big')
		return null
	}

	try {
		await customFetch.patch('/users/update-user', formData)
		toast.success('Profile Updated')
		return redirect('/dashboard/all-jobs')
	} catch (error) {
		const customError = error as CustomActionError
		toast.error(customError.response?.data?.msg || 'An error occurred')
		return null
	}
}

const Profile = () => {
	const { user } = useOutletContext<UserContext>()

	const navigation = useNavigation()

	const isSubmitting = navigation.state === 'submitting'

	return (
		<section className='w-full rounded-sm  border  pt-12 px-8 pb-16'>
			<Form
				method='post'
				className='m-0 max-w-full w-full'
				encType='multipart/form-data'>
				<h4 className='capitalize mb-8'>User Profile</h4>
				<div className='grid gap-y-4 md:grid-cols-2 md:items-center md:gap-x-4 lg:grid-cols-3'>
					{/* <div className=''></div> */}
					{/* form row */}
					<div className='mb-0'>
						<label
							htmlFor='avatar'
							className='block text-sm mb-3 capitalize tracking-wider leading-6'>
							Select an image file (max 0.5 MB)
						</label>
						<input
							type='file'
							id='avatar'
							name='avatar'
							className='h-[35px] w-full py-1 px-3 rounded-md bg-orange-700 border text-slate-50 grid place-items-center'
							accept='image/*'
						/>
					</div>
					<FormRow type='text' name='name' defaultValue={user.name} />
					<FormRow
						type='text'
						labelText='last name'
						name='lastName'
						defaultValue={user.lastName}
					/>
					<FormRow type='email' name='email' defaultValue={user.email} />
					<FormRow type='text' name='location' defaultValue={user.location} />
					<button type='submit' className='' disabled={isSubmitting}>
						{isSubmitting ? 'submitting...' : 'submit'}
					</button>
				</div>
			</Form>
		</section>
	)
}

export default Profile
