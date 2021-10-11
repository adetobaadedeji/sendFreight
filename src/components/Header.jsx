/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import { Search } from '@mui/icons-material'
// import { SearchIcon } from '@heroicons/react/solid'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div>
			<nav className='w-full bg-indigo-800 text-white'>
				<div className='w-full mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='w-full flex items-center justify-between h-16'>
						<div className='w-full flex items-center'>
							<div className=' mr-5 flex-shrink-0'>
								<span className=' text-lg font-semibold'>
									send
									<span className="text-sm">{' '}FREIGHT</span>
								</span>
							</div>

							<div className='hidden relative w-2/5  ml-10 md:block'>
								<input
									type='text'
									id='password'
									className='w-full h-8 px-3 bg-blue-300 opacity-30 text-black text-lg placeholder-white ml-5  hover:border-gray-300 focus:outline-none  '
									placeholder='Search'
								/>
								<button className='block w-6 h-6 text-center absolute top-1 right-0 text-gray-400 focus:outline-none '>
									<Search className='text-gray-200' />
								</button>
							</div>
							<div className='hidden md:block ml-auto'>
								<div className='ml-10 flex items-baseline space-x-4'>
									<button className=' hover:bg-white hover:text-indigo-700 text-white  md:px-1 lg:px-5 py-2 rounded-md text-sm font-medium border-2 border-white'>
										Request Quote
									</button>
									<button className='text-white bg-green-500 hover:bg-green-400  md:px-2 lg:px-5 py-2.5  rounded-md text-sm font-medium'>
										Book Shipment
									</button>
								</div>
							</div>
						</div>
						<div className='-mr-2 flex md:hidden'>
							<button
								onClick={() => setIsOpen(!isOpen)}
								type='button'
								className='bg-indigo-900 inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-800 focus:ring-white'
								aria-controls='mobile-menu'
								aria-expanded='false'
							>
								<span className='sr-only'>Open main menu</span>
								{!isOpen ? (
									<svg
										className='block h-6 w-6'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										aria-hidden='true'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M4 6h16M4 12h16M4 18h16'
										/>
									</svg>
								) : (
									<svg
										className='block h-6 w-6'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										aria-hidden='true'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M6 18L18 6M6 6l12 12'
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter='transition ease-out duration-1000 transform'
					enterFrom='opacity-0 scale-95'
					enterTo='opacity-100 scale-100'
					leave='transition ease-in duration-300 transform'
					leaveFrom='opacity-100 scale-100'
					leaveTo='opacity-0 scale-95'
				>
					<div className='md:hidden' id='mobile-menu'>
						<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
							<a
								href='#'
								className='hover:bg-indigo-700 text-white block px-3 py-2 rounded-md text-base font-medium'
							>
								Request Quote
							</a>

							<a
								href='#'
								className='text-indigo-300 hover:bg-indigo-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
							>
								Book Shipment
							</a>
						</div>
					</div>
				</Transition>
			</nav>
		</div>
	)
}

export default Header
