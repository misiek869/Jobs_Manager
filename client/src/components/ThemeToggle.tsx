import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useDashboardContext } from '../pages/DashboardLayout'

const ThemeToggle = () => {
	const { isDarkTheme, toggleDarkTheme } = useDashboardContext()

	return (
		<button
			type='button'
			onClick={toggleDarkTheme}
			className='bg-transparent w-14 h-8 grid place-items-center cursor-pointer '>
			{isDarkTheme ? (
				<BsFillSunFill className='text-cxl text-gray-800' />
			) : (
				<BsFillMoonFill className='text-cxl text-gray-800' />
			)}
		</button>
	)
}

export default ThemeToggle
