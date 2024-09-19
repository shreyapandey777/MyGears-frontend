import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { SidebarStateContext } from './SidebarState';
import logo from  '../assets/logo.svg'

const Sidebar = () => {
    const sidebarState = useContext(SidebarStateContext)
    // console.log(sidebarState);
    return (
        <aside className='hidden lg:block mr-2'>
            <nav className='h-full flex flex-col border-r shadow-sm bg-slate-100 rounded-r-2xl'>
                <div className='p-4 pb-2 flex justify-between items-center'>
                    <img src={logo} className='w-32' />

                </div>
                <ul className='flex-1 px-3 py-5 '>
                    <li className='flex justify-center p-4 mt-4 rounded-xl  bg-slate-300 text-xl'><Link to='/'>Home</Link></li>
                    <li className='flex justify-center p-4 mt-4 rounded-xl  bg-slate-300 text-xl'><Link to='/assets'>Assets</Link></li>
                    <li className='flex justify-center p-4 mt-4 rounded-xl  bg-slate-300 text-xl'><Link to='/maintenance'>Maintenance</Link></li>
                </ul>
                {/* <button className='md:hidden ml-6 bg-slate-300 rounded-xl py-2 px-2 mr-4 ' onClick={() => sidebarState.setSidebarExtended(false)}>
                        X
                </button> */}
            </nav>
        </aside >
    )
}

export default Sidebar