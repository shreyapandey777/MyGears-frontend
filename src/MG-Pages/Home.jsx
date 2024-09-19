import React, { useEffect, useState, useContext } from 'react'
import Card from '../MG-Components/Card'
import Navbar from '../MG-Components/Navbar'
import axios from '../Utils/axiosInstance'
import TicketOverview from '../MG-Components/TicketOverview'
import { SidebarStateContext } from '../MG-Components/SidebarState'

export default function Home() {
  const [displayData, setDisplayData] = useState([])
  const sidebarState = useContext(SidebarStateContext)
  console.log(sidebarState);

  useEffect(() => {
    const displayData = async () => {
      try {
        const respone = await axios.get('/assets')
        setDisplayData(respone.data)
        // console.log(respone.data);
      } catch (error) {
        console.log(err)
      }
    }
    displayData()
  }, [])

  const homePageData = displayData.map((data) => {
    return <Card key={data._id} name={data.name} description={data.description} />
  })


  return (
    <div className='flex flex-col min-h-screen border-2 rounded-2xl md:m-4'>
      <Navbar/>
      <div className='flex justify-center items-center'>

        {/* <button onClick={() => sidebarState.setSidebarExtended(true)} className='lg:hidden bg-slate-300 rounded-xl py-2 px-4 '>Menu</button> */}

        <h1 className='py-8 text-4xl font-bold leading-7 text-gray-900 '>All Products</h1>
      </div>
      <div className='py-8 text-2xl font-bold leading-7 text-gray-900 mx-auto mt-4 -mb-6'>
        Tickets Metrics
      </div>
      <TicketOverview />

      <div className='py-8 text-2xl font-bold leading-7 text-gray-900 mx-auto mt-4 -mb-4'>
        Products Overview
      </div>
      <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-5 mx-10 '>
        {homePageData}
      </div>
    </div>
  )
}
<Card />
