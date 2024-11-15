import { Link, useRouteError } from 'react-router-dom'
import errorImg from '../assets/images/error_2.jpg'

const Error = () => {
	const error = useRouteError()

	if (error.status === 404) {
		return (
			<main className='min-h-screen text-center flex flex-col items-center justify-center '>
				<img src={errorImg} alt='404 error' className='w-[90vw] block mb-8' />
				<Link className='text-2xl text-gray-900' to={'/dashboard'}>
					Back Home
				</Link>
			</main>
		)
	}

	return (
		<main className='min-h-screen text-center flex flex-col items-center justify-center '>
			<h3>Something went wrong</h3>
		</main>
	)
}

export default Error
