import React from 'react'
import image from '../assets/motor.png'

export default function Card(props) {
    return (
        <div className='grid grid-cols-1 border-4 rounded-xl place-items-center  bg-slate-200'>
            <img src={image} className='h-60 rounded-xl mt-2 ' />
            <div className='flex flex-col items-center'>
                <h2 className='font-semibold py-3'>{props.name}</h2>
                <p className='text-sm py-2 m-2'>{props.description}</p>
                {/* <button className='border-2 bg-orange-500 text-white rounded-xl py-2 px-4 mb-4'>View</button> */}
            </div>
        </div>
    )
}
