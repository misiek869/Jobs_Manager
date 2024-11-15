import { Logo, FormRow } from '../components'
import { Link } from 'react-router-dom'

const btnStyle =
	'cursor-pointer text-white bg-orange-700 rounded-sm tracking-wider py-3 px-4 shadow-sm duration-300 capitalize block hover:bg-orange-800 w-full mb-6 hover:shadow-lg'

const Login = () => {
	return (
		<section className='min-h-screen grid place-items-center '>
			<form className='w-[90vw] max-w-[400px]  rounded-sm shadow-md py-8 px-10 border'>
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

				<button className={`${btnStyle} mt-12`} type='submit'>
					submit
				</button>

				<button className={`${btnStyle}`} type='submit'>
					demo
				</button>

				<p className='mt-4 text-center leading-6'>
					Are You a Member?
					<Link
						className='text-orange-700 tracking-wider ml-1'
						to={'/register'}>
						Register
					</Link>
				</p>
			</form>
		</section>
	)
}

export default Login
