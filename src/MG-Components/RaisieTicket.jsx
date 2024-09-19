import React from 'react'
import { TicketSchema } from '../Utils/TicketSchema';
import { useFormik } from 'formik';
import axios from '../Utils/axiosInstance'
const RaisieTicket = () => {
    const initialValues = {
        ticketId: "",
        assetId: "",
        status: "",
        issueDescription: "",
        date: ""
    }

    const { values, errors, handleChange, handleBlur, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: TicketSchema,
        onSubmit: (values, action) => {
            console.log(values);
            axios.post("/tickets", { values })
                .then(response => {
                    console.log(response.data)
                    alert("Ticket Added SuccessFully")
                })
                .catch(error => {
                    alert(error.response.data.details)
                    console.error(error.response.data)
                })

            action.resetForm()
        }
    })
    return (
        <div className='flex flex-col mx-8 p-4'>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <div className='py-4 '>
                    <label className='text-xl'>Ticket ID :</label>
                    <input
                        type='text'
                        name='ticketId'
                        value={values.ticketId}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='mx-2 border-2 rounded-xl px-2' />
                </div>
                {errors.ticketId && touched.ticketId ? <p className='text-red-400'>{errors.ticketId}</p> : null}

                <div className='py-4'>
                    <label className='text-xl'>Asset ID :</label>
                    <input
                        type='text'
                        name='assetId'
                        value={values.assetId}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='mx-2 border-2 rounded-xl px-2' />
                </div>
                {errors.assetId && touched.assetId ? <p className='text-red-400'>{errors.assetId}</p> : null}


                <div className='py-4'>
                    <label className='text-xl'>Status :</label>
                    <input
                        type='text'
                        name='status'
                        value={values.status}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='mx-2 border-2 rounded-xl px-2' 
                        list='statusOptions'/>
                        <datalist id='statusOptions'>
                        <option value="Open"/>
                        <option value="Resolved"/>
                        <option value="In-Progress"/>
                        </datalist>
                </div>
                {errors.status && touched.status ? <p className='text-red-400'>{errors.status}</p> : null}

                <div className='py-4'>
                    <label className='text-xl'> Issue Description :</label>
                    <input
                        type='text'
                        name='issueDescription'
                        value={values.issueDescription}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='mx-2 border-2 rounded-xl px-2' />
                </div>
                {errors.issueDescription && touched.issueDescription ? <p className='text-red-400'>{errors.issueDescription}</p> : null}

                <div className='py-4'>
                    <label className='text-xl'>Date :</label>
                    <input
                        type='date'
                        name='date'
                        value={values.date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='mx-2 border-2 rounded-xl px-2' />
                </div>
                {errors.date && touched.date ? <p className='text-red-400'>{errors.date}</p> : null}

                <button type='submit' className=' rounded-xl bg-slate-400 text-white p-4 w-64' >Raise Ticket</button>
            </form>
        </div>
    )
}

export default RaisieTicket