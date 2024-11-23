type StatItemProps = {
	count: number
	title: string
	icon: React.ReactNode
	bcg?: string
	color: string
}

const StatItem = ({ count, title, icon, color }: StatItemProps) => {
	return (
		<article
			className={`p-8 bg-orange-700  border-b-4 rounded-sm`}
			style={{ borderColor: color }}>
			<header className=''>
				<span className=''>{count}</span>
				<span className=''>{icon}</span>
			</header>
			<h5 className=''>{title}</h5>
		</article>
	)
}

export default StatItem
