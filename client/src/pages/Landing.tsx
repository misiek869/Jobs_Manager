import { Link } from 'react-router-dom'

import mainImg from '../assets/images/main-photo.jpg'
import Logo from '../components/Logo'

const btnStyle =
	'	cursor-pointer text-white bg-orange-700 border-none rounded-sm tracking-wider py-3 px-4 shadow-sm duration-300 capitalize inline-block hover:bg-orange-800 hover:shadow-lg'

const Landing = () => {
	return (
		<section>
			<nav className=' w-[90vw] max-w-6xl my-0 mx-auto  flex items-center'>
				<Logo />
			</nav>
			<div className=' landing-page w-[90vw] max-w-6xl my-0 mx-auto grid items-center mt-[-3rem] grid-cols-[1fr_400px] gap-x-12'>
				<div className=''>
					<h1 className='font-bold mb-6 text-gray-900'>
						Manage Your <span className='text-orange-700'>Jobs</span>
					</h1>
					<p className='leading-8 text-gray-800 mb-6 max-w-[35em]'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Exercitationem ab nulla maxime reiciendis, magnam delectus officiis
						temporibus rem ipsum nemo? Asperiores unde obcaecati animi mollitia
						esse! Officia beatae a quasi.
					</p>
					<Link className={btnStyle} to={'/register'}>
						Register
					</Link>
					<Link className={`${btnStyle} ml-4`} to={'/Login'}>
						Login / Demo
					</Link>
				</div>
				<img
					className='w-full hidden object-cover md:block'
					src={mainImg}
					alt='image with charts'
				/>
			</div>
		</section>
	)
}

export default Landing
