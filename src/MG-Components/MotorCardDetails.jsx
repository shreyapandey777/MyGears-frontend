import axios from '../Utils/axiosInstance'
import React from 'react'
import { Link } from 'react-router-dom'

export default function MotorCardDetails(props) {

    // console.log(props.id);
    const { id, name } = props
    const deleteAsset = () => {
        if (window.confirm(`Are Sure you want to delete ${name}`)) {
            axios.delete('/assets/' + id)
                .then(response => {
                    console.log(response.data)
                    alert("Asset Deleted Successfully")
                })
                .catch(err => console.log(err))
        }
        else {
            alert("Not Deleted")
        }
        // console.log(id, name);

    }
    return (
        <div className='border-2 rounded-xl p-2 mx-8 my-4'>
            <ul>
                <li className='text-xl'>Asset ID : {props.assetId}</li>
                <li className='text-xl'>Name: {props.name}</li>
                <li className='text-xl'>Description: {props.description}</li>
                <li className='text-xl'>Location: {props.location}</li>
                <li className='text-xl'>Manufacturer: {props.manufacturer}</li>
                <li className='text-xl'>Model Number: {props.modelNo}</li>
                <li className='text-xl'>Serial Number: {props.serialNo}</li>
                <li className='text-xl'>Installation Date: {props.insDate}</li>
                <li className='text-xl'>Last Maintenance Date: {props.mnsDate}</li>
                <li className='text-xl'>Status: {props.Status}</li>
                <li className='text-xl'>Power: {props.power} KW</li>
                <li className='text-xl'>Voltage: {props.voltage} V</li>
                <li className='text-xl'>Current: {props.current} A</li>
                <li className='text-xl'>Speed: {props.speed} RPM</li>
            </ul>
            <hr className='my-2' />
            <div className='flex flex-row gap-4 over '>
                <button className=' rounded-xl bg-slate-400 text-white p-4 w-64 '><Link to={`/update-asset/${id}`}>Update</Link></button>
                <button onClick={deleteAsset} className='rounded-xl bg-red-300 text-white p-4 w-64 '>Remove</button>
            </div>
        </div>
    )
}
