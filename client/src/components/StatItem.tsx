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
			<header className='flex items-center justify-between'>
				<span
					className='block font-bold text-5xl leading-8'
					style={{ color: color }}>
					{count}
				</span>
				<span
					className='w-[70px] h-[60px] text-slate-50 rounded-xl flex items-center justify-center text-3xl '
					style={{ backgroundColor: color }}>
					{icon}
				</span>
			</header>
			<h5 className='m-o capitalize tracking-widest text-left mt-2 text-xl text-slate-50'>
				{title}
			</h5>
		</article>
	)
}

export default StatItem
