import React, { Fragment, useState } from 'react'
import {
	LocationOn,
	ArrowDropDown,
	Check,
	InfoOutlined,
} from '@mui/icons-material'
import { Icon } from 'semantic-ui-react'
import { Listbox, Transition } from '@headlessui/react'

const people = [
	{ name: 'Incoterms' },
	{ name: 'JavaScript' },
	{ name: 'Block Chain' },
	{ name: 'Python' },
	{ name: 'Machine Learning' },
]

const ImportExport = () => {
	const [selected, setSelected] = useState(people[0])

	return (
		<section className='w-full py-10 px-8 bg-white rounded text-sm md:text-base text-gray-500'>
			<span className='w-full'>
				<InfoOutlined />
			</span>

			<div className='w-full  flex flex-col mt-2 mb-8 space-y-5 md:space-y-0 md:flex-row md:space-x-10'>
				<div className='rounded border w-1/2 md:w-auto border-gray-300'>
					<button className='w-1/2 px-2 sm:px-4 py-3 border-r border-gray-300'>
						Import
					</button>
					<button className='w-1/2 px-2 sm:px-4 py-3'>Export</button>
				</div>
				<div className='flex-1 flex justify-start  items-center bg-gray-100 rounded'>
					<span className='flex items-center h-full mx-2'>
						<LocationOn className='mx-1' /> <p>From</p>
					</span>
					<input
						type='text'
						className='w-full h-12 md:h-full pt-1 focus:outline-none caret-indigo-700 text-gray-700 placeholder-gray-300 bg-gray-100 rounded'
						placeholder='City or port'
					/>
				</div>
				<div className='flex-1 flex justify-start  items-center bg-gray-100 rounded'>
					<span className='flex items-center h-full mx-2'>
						<LocationOn className='mx-1' /> <p>To</p>
					</span>
					<input
						type='text'
						className='w-full h-12 md:h-full pt-1 focus:outline-none caret-indigo-700 text-gray-700 placeholder-gray-300 bg-gray-100 rounded'
						placeholder='City or port'
					/>
				</div>
				{/* <span className='absolute -top-8 -left-10'>
					<InfoOutlined />
				</span> */}
			</div>

			{/* row-2 starts */}
			<div className='w-full flex flex-col space-y-5 md:space-y-0 md:flex-row items-center text-gray-500 md:space-x-10'>
				<div className='w-full flex-1 flex bg-gray-100 rounded'>
					<span className='flex items-center mb-2 rounded-l bg-gray-100 ml-3 mr-2'>
						<Icon className='' name='calendar' />
					</span>
					<input
						type='text'
						className='w-full h-10 focus:outline-none caret-indigo-700 text-gray-700 placeholder-gray-500 bg-gray-100 rounded-r'
						placeholder='Ready Date'
					/>
				</div>
				<div className='w-full flex-1'>
					<Listbox value={selected} onChange={setSelected}>
						<div className='relative'>
							<Listbox.Button className='relative w-full h-10 py-2 pl-3 pr-10 text-left bg-gray-100 rounded cursor-default'>
								<span className='block truncate'>{selected.name}</span>
								<span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
									<ArrowDropDown
										className='w-5 h-5 text-gray-600'
										aria-hidden='true'
									/>
								</span>
							</Listbox.Button>
							<Transition
								as={Fragment}
								leave='transition ease-in duration-100'
								leaveFrom='opacity-100'
								leaveTo='opacity-0'
							>
								<Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-64 ring-1 ring-black ring-opacity-5 z-50'>
									{people.map((person, personIdx) => (
										<Listbox.Option
											key={personIdx}
											className={({ active }) =>
												`${
													active
														? 'text-amber-900 bg-amber-100'
														: 'text-gray-900'
												}
                          cursor-default select-none relative py-2 pl-10 pr-4`
											}
											value={person}
										>
											{({ selected, active }) => (
												<>
													<span
														className={`${
															selected ? 'font-medium' : 'font-normal'
														} block truncate`}
													>
														{person.name}
													</span>
													{selected ? (
														<span
															className={`${
																active ? 'text-amber-600' : 'text-amber-600'
															}
                                absolute inset-y-0 left-0 flex items-center pl-3`}
														>
															<Check className='w-5 h-5' aria-hidden='true' />
														</span>
													) : null}
												</>
											)}
										</Listbox.Option>
									))}
								</Listbox.Options>
							</Transition>
						</div>
					</Listbox>
				</div>
				<div className='w-full flex-1'>
					<input
						type='text'
						className='w-full h-10 px-3 focus:outline-none caret-indigo-700 text-gray-700 placeholder-gray-500 bg-gray-100 rounded'
						placeholder='Total Cargo value'
					/>
				</div>
			</div>
		</section>
	)
}

export default ImportExport
