import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import { Tab } from '@headlessui/react'

const classNames = (...classes) => {
	return classes.filter(Boolean).join(' ')
}

const CargoDetails = () => {
	const [enabled, setEnabled] = useState(false)

	let [details] = useState(['Total Dimensions', 'Package Details'])

	return (
		<section className='w-full py-8 px-8 bg-white rounded text-gray-900'>
			<div className='w-full flex flex-col md:flex-row md:justify-between'>
				<h3 className='font-semibold'> Cargo Details</h3>
				<div className='py-1 flex flex-row items-center'>
					<Switch
						checked={enabled}
						onChange={setEnabled}
						className={`${enabled ? 'bg-indigo-800' : 'bg-gray-200'}
          relative inline-flex flex-shrink-0 w-14 h-8 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
					>
						<span className='sr-only'>
							Dangerous Cargo such as chemicals and batteries
						</span>
						<span
							aria-hidden='true'
							className={`${enabled ? 'translate-x-6' : 'translate-x-0'}
            pointer-events-none inline-block w-7 h-7 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
						/>
					</Switch>
					<p className='ml-3 text-sm md:text-base md:ml-5 font-semibold'>
						Dangerous Cargo{' '}
						<span className='font-medium'>(ex. Chemicals, Battery)</span>{' '}
					</p>
				</div>
			</div>

			<div className='w-full max-w-md mt-5'>
				<Tab.Group>
					<Tab.List className='flex p-1 space-x-1 bg-gray-100 rounded-lg'>
						{details.map((detail) => (
							<Tab
								key={detail}
								className={({ selected }) =>
									classNames(
										'w-full py-2.5 text-sm md:text-base leading-5 font-medium text-gray-300 rounded-md',
										selected
											? 'bg-white shadow text-indigo-800 '
											: 'text-gray-400 '
									)
								}
							>
								{detail}
							</Tab>
						))}
					</Tab.List>
					<Tab.Panels className=' mt-8 md:mt-16 text-sm md:text-base'>
						<Tab.Panel className='w-full flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-5'>
							<div className='relative rounded border w-auto border-gray-300'>
								<div className='w-full flex h-12 justify-start  items-center bg-gray-100 rounded'>
									<input
										type='text'
										className='w-full h-full md:h-full px-2 focus:outline-none caret-indigo-700 text-gray-700 bg-gray-white rounded'
									/>
									<p className='px-2 pt-2.5 h-full bg-white text-gray-400'>
										cbm
									</p>
								</div>
								<span className='absolute -top-3 left-4 z-10 bg-white text-gray-600 px-2'>
									Total Volume
								</span>
							</div>
							<div className='relative rounded border w-auto border-gray-300'>
								<div className='w-full flex h-12 justify-start  items-center bg-gray-100 rounded'>
									<input
										type='text'
										className='w-full h-full md:h-full px-2 focus:outline-none caret-indigo-700 text-gray-700 bg-gray-white rounded'
									/>
									<p className='px-2 pt-2.5 h-full bg-white text-gray-400'>
										Kg
									</p>
								</div>
								<span className='absolute -top-3 left-4 z-10 bg-white text-gray-600 px-2'>
									Total Weight
								</span>
							</div>
						</Tab.Panel>
						<Tab.Panel>Content 2</Tab.Panel>
					</Tab.Panels>
				</Tab.Group>
			</div>
		</section>
	)
}

export default CargoDetails
