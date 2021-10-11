import React from 'react'

const ServiceCard = ({title, subtitle}) => {
  return (
    <div className="w-full h-24 flex justify-start items-center text-sm lg:text-base bg-white border 
    border-gray-300 text-gray-500 pl-5 hover:bg-indigo-800 hover:text-white rounded">
      <p>{title} <br/> {subtitle}</p>
      
    </div>
  )
}

export default ServiceCard
