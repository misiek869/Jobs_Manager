import React from 'react'
import { Logo, FormRow } from '../components'
import { Link } from 'react-router-dom'

const Register = () => {
	return (
		<section className='min-h-screen grid place-items-center '>
			<form className='w-[90vw] max-w-[400px]  rounded-sm shadow-md py-8 px-10 border'>
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
					type={'email'}
					defaultValue={'michal@michal.pl'}
					name={'email'}
				/>

				<FormRow type={'password'} defaultValue={'123'} name={'password'} />

				<button className='' type='submit'>
					submit
				</button>
				<p className='mt-4 text-center leading-6'>
					Are You a Member?
					<Link className='text-orange-700 tracking-wider ml-1' to={'/login'}>
						Login
					</Link>
				</p>
			</form>
		</section>
	)
}

export default Register
