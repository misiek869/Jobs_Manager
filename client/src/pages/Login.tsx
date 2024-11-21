import { Logo, FormRow } from '../components'
import { Link, Form, redirect, useNavigation } from 'react-router-dom'
import { toast } from 'react-toastify'
import customFetch from '../utils/customFetch'
import { ActionFunctionArgs } from 'react-router-dom'

export type CustomActionError = {
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
		await customFetch.post('/auth/login', data)
		toast.success('Logged In')
		return redirect('/dashboard')
	} catch (error) {
		const customError = error as CustomError
		toast.error(customError.response?.data?.msg || 'An error occurred')
		return error
	}
}

const btnStyle =
	'cursor-pointer text-white bg-orange-700 rounded-sm tracking-wider py-3 px-4 shadow-sm duration-300 capitalize block hover:bg-orange-800 w-full mb-6 hover:shadow-lg'

const Login = () => {
	const navigation = useNavigation()

	const isLogging = navigation.state === 'submitting'

	return (
		<section className='min-h-screen grid place-items-center '>
			<Form
				method='post'
				className='w-[90vw] max-w-[400px]  rounded-sm shadow-md py-8 px-10 border'>
				<div className='flex justify-center mb-6'>
					<Logo />
				</div>
				<h4 className='text-center mb-6'>Login</h4>

				<FormRow
					type={'email'}
					defaultValue={'michal@michal.pl'}
					name={'email'}
				/>

				<FormRow type={'password'} defaultValue={'123'} name={'password'} />

				<button
					disabled={isLogging}
					className={`${btnStyle} mt-12 disabled:opacity-65`}
					type='submit'>
					{isLogging ? 'logging...' : 'log in'}
				</button>

				<button
					disabled={isLogging}
					className={`${btnStyle} disabled:opacity-65`}
					type='submit'>
					demo
				</button>

				<p className='mt-4 text-center leading-6'>
					Not a Member?
					<Link
						className='text-orange-700 tracking-wider ml-1'
						to={'/register'}>
						Register
					</Link>
				</p>
			</Form>
		</section>
	)
}

export default Login
