import { IoIosAddCircleOutline } from 'react-icons/io'
import { LuWallet2 } from 'react-icons/lu'
import { IoIosStats } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'
import { RiAdminLine } from 'react-icons/ri'
import { ReactNode } from 'react'

type Link = {
	text: string
	path: string
	icon: ReactNode
}

const links: Link[] = [
	{ text: 'add job', path: '.', icon: <IoIosAddCircleOutline /> },
	{ text: 'all jobs', path: 'all-jobs', icon: <LuWallet2 /> },
	{ text: 'stats', path: 'stats', icon: <IoIosStats /> },
	{ text: 'profile', path: 'profile', icon: <CgProfile /> },
	{ text: 'admin', path: 'admin', icon: <RiAdminLine /> },
]

export default links
