const StatItem = ({ count, title, icon, bcg }) => {
	return (
		<>
			<header className=''>
				<span className=''>{count}</span>
				<span className=''>{icon}</span>
			</header>
			<h5 className=''>{title}</h5>
		</>
	)
}

export default StatItem
