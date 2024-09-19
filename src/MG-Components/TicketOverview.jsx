import axios from '../Utils/axiosInstance'
import React, { useEffect, useState } from 'react'

const TicketOverview = () => {
    const [statusData, setStatusData] = useState([])
    const [isloading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    

    useEffect(() => {
        const status = async () => {
            try {
                setLoading(true)
                const response = await axios.get('/tickets/status')
                // console.log(response.data)
                setStatusData(response.data)

            } catch (error) {
                console.error(error)
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        status()
    }, [])
    if (isloading) {
        return <div>Loading....</div>
    }
    if (error) {
        return <div>There is Some error</div>
    }
    // console.log(statusData);

    return (
        <div className=' text-2xl font-extrabold flex flex-col lg:flex-row  border-2 py-4 mx-10 my-4 rounded-xl bg-slate-200  '>
            <div className='mx-auto py-4 text-red-400'>Open : {statusData.open ? `${statusData.open}` : '0'}</div>
            <div className='mx-auto py-4 text-green-500'>Resolved : {statusData.resolved ? `${statusData.resolved}` : '0'}</div>
            <div className='mx-auto py-4 text-orange-400'>Under Process : {statusData.inprogress ? `${statusData.inprogress}` : '0'}</div>
        </div>
    )
}

export default TicketOverview