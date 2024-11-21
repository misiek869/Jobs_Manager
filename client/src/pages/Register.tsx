import { Logo, FormRow } from '../components'
import { Form, redirect, useNavigation, Link } from 'react-router-dom'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'
import { ActionFunctionArgs } from 'react-router-dom'

interface CustomError {
	response?: {
		data?: {
			msg?: string
		}
	}
}

export const action = async ({ request }: ActionFunctionArgs) => {
	const formData = await request.formData()
	const data = Object.fromEntries(formData)

	try {
		await customFetch.post('/auth/register', data)
		toast.success('Registration successful')
		return redirect('/login')
	} catch (error) {
		const customError = error as CustomError
		toast.error(customError.response?.data?.msg || 'An error occurred')
		return error
	}
}

export const btnStyle =
	'cursor-pointer text-white bg-orange-700 rounded-sm tracking-wider py-3 px-4 shadow-sm duration-300 capitalize block hover:bg-orange-800 w-full mb-6 hover:shadow-lg'

const Register = () => {
	const navigation = useNavigation()

	const isSubmitting = navigation.state === 'submitting'

	return (
		<section className='min-h-screen grid place-items-center '>
			<Form
				method='post'
				className='w-[90vw] max-w-[400px]  rounded-sm shadow-md py-8 px-10 border'>
				<div className='flex justify-center mb-6'>
					<Logo />
				</div>
				<h4 className='text-center mb-6'>Register</h4>
				<FormRow type={'text'} name={'name'} defaultValue={'michal'} />

				<FormRow
					type={'text'}
					name={'lastName'}
					defaultValue={'kowalski'}
					labelText={'last name'}
				/>

				<FormRow
					type={'text'}
					name={'location'}
					defaultValue={'my city'}
					labelText={'location'}
				/>

				<FormRow
					type={'email'}
					defaultValue={'michal@michal.pl'}
					name={'email'}
				/>

				<FormRow
					type={'password'}
					defaultValue={'secret123'}
					name={'password'}
				/>

				<button
					className={`${btnStyle} disabled:opacity-65`}
					type='submit'
					disabled={isSubmitting}>
					{isSubmitting ? 'submitting...' : 'submit'}
				</button>
				<p className='mt-4 text-center leading-6'>
					Are You a Member?
					<Link className='text-orange-700 tracking-wider ml-1' to={'/login'}>
						Login
					</Link>
				</p>
			</Form>
		</section>
	)
}

export default Register
