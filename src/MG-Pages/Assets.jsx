import React, { useEffect, useState, useContext } from 'react'
import MotorCardDetails from '../MG-Components/MotorCardDetails'
import AddAsset from '../MG-Components/AddAsset'
import { Link } from 'react-router-dom'
import axios from '../Utils/axiosInstance'
import { SidebarStateContext } from '../MG-Components/SidebarState';
import Sidebar from '../MG-Components/Sidebar'
import Navbar from '../MG-Components/Navbar'




export default function Assets() {
  const [assetData, setAssetData] = useState([])
  const [addState, setAddState] = useState(false)
  const sidebarState = useContext(SidebarStateContext)



  const handleClick = () => {
    setAddState(curr => !curr)
  }
  useEffect(() => {
    const assetData = async () => {
      try {
        const response = await axios.get('/assets')
        setAssetData(response.data)
        // console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    assetData()
  }, [addState])

  const assetDataComp = assetData.map((data) => {
    // console.log(data);
    return <MotorCardDetails
      key={data._id}
      id={data._id}
      assetId={data.assetId}
      name={data.name}
      description={data.description}
      location={data.location}
      manufacturer={data.manufacturer}
      modelNo={data.modelNo}
      serialNo={data.serialNo}
      insDate={data.insDate}
      mnsDate={data.mnsDate}
      status={data.status}
      power={data.power}
      voltage={data.voltage}
      current={data.current}
      speed={data.speed} />
  })

  return (
    <>

        <div className='grid border-2 m-4 rounded-xl'>
          <Navbar />
          <div className='flex justify-center items-center '>


            {/* <button onClick={() => sidebarState.setSidebarExtended(true)} className='lg:hidden bg-slate-300 rounded-xl py-2 px-4 ml-8'>Menu</button> */}


            <h1 className='py-8 text-4xl font-bold leading-7 text-gray-900 mx-auto'>{!addState ? 'All Assets' : 'Add Asset'}</h1>
            {!addState ? <button onClick={handleClick} className=' bg-slate-300 rounded-xl py-2 px-4 mr-8'><Link to="#">Add Asset</Link></button> : <button onClick={handleClick} className='bg-slate-300 rounded-xl py-2 px-12 mr-4'> X </button>}
          </div>

          {addState ?
            <AddAsset /> :
            <div>
              {assetDataComp}
            </div>
          }
        </div>
    </>
  )
}
