import { useFormik } from 'formik'
import React from 'react'
import { AddAssetScehema } from '../Utils/AddAssetSchema';
import axios from '../Utils/axiosInstance'

export default function AddAsset() {

    const initialValues = {
        assetId: "",
        name: "",
        description: "",
        location: "",
        manufacturer: "",
        modelNo: "",
        serialNo: "",
        insDate: "",
        mnsDate: "",
        status: "",
        power: "",
        voltage: "",
        current: "",
        speed: ""
    }

    const { values, errors, handleChange, handleBlur, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: AddAssetScehema,
        onSubmit: (values, action) => {
            console.log(values);
            axios.post("/assets", { values })
                .then(response => {
                    console.log(response.data)
                    alert("Asset Added SuccessFully")
                })
                .catch(error => {
                    alert(error.response.data.details)
                    console.error(error.response.data)
                })

            action.resetForm()
        }
    })
    // console.log(errors); 
    return (
        <div className='flex flex-col mx-8 p-4'>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <div className='py-4 '>
                    <label className='text-xl'>Asset ID :</label>
                    <input
                        type='text'
                        name='assetId'
                        value={values.assetId}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='mx-2 border-2 rounded-xl' />
                </div>
                {errors.assetId && touched.assetId ? <p className='text-red-400'>{errors.assetId}</p> : null}
                <div className='py-4'>
                    <label className='text-xl'>Name :</label>
                    <input
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='mx-2 border-2 rounded-xl' />
                </div>
                {errors.name && touched.name ? <p className='text-red-400'>{errors.name}</p> : null}
                <div className='py-4'>
                    <label className='text-xl'>Description :</label>
                    <input
                        type='text'
                        name='description'
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='mx-2 border-2 rounded-xl' />
                </div>
                {<errors className="desc"></errors> && touched.description ? <p className='text-red-400'>{errors.description}</p> : null}
                <div className='py-4'>
                    <label className='text-xl'>Location :</label>
                    <input
                        type='text'
                        name='location'
                        value={values.location}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='mx-2 border-2 rounded-xl' />
                </div>
                {errors.location && touched.location ? <p className='text-red-400'>{errors.location}</p> : null}
                <div className='py-4'>
                    <label className='text-xl'>Manufacturer :</label>
                    <input
                        type='text'
                        name='manufacturer'
                        value={values.manufacturer}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='mx-2 border-2 rounded-xl' />
                </div>
                {errors.manufacturer && touched.manufacturer ? <p className='text-red-400'>{errors.manufacturer}</p> : null}
                <div className='py-4'>
                    <label className='text-xl'>Model No :</label>
                    <input
                        type='text'
                        name='modelNo' value={values.modelNo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='mx-2 border-2 rounded-xl' />
                </div>
                {errors.modelNo && touched.modelNo ? <p className='text-red-400'>{errors.modelNo}</p> : null}

                <div className='py-4'>
                    <label className='text-xl'>Serial No :</label>
                    <input
                        type='text'
                        name='serialNo'
                        value={values.serialNo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='mx-2 border-2 rounded-xl' />
                </div>
                {errors.serialNo && touched.serialNo ? <p className='text-red-400'>{errors.serialNo}</p> : null}

                <div className='py-4'>
                    <label className='text-xl'>Installation Date :</label>
                    <input
                        type='date'
                        name='insDate'
                        value={values.insDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='mx-2 border-2 rounded-xl' />
                </div>
                {errors.insDate && touched.insDate ? <p className='text-red-400'>{errors.insDate}</p> : null}

                <div className='py-4'>
                    <label className='text-xl'>Last Manintenance Date :</label>
                    <input
                        type='date'
                        name='mnsDate'
                        value={values.mnsDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='mx-2 border-2 rounded-xl' />
                </div>
                {errors.mnsDate && touched.mnsDate ? <p className='text-red-400'>{errors.mnsDate}</p> : null}

                <div className='py-4'>
                    <label className='text-xl'>Status :</label>
                    <input
                        type='text'
                        name='status'
                        value={values.status}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='mx-2 border-2 rounded-xl' />
                </div>
                {errors.status && touched.status ? <p className='text-red-400'>{errors.status}</p> : null}

                <div className='py-4 flex sm:flex-col-1'>
                    <label className=' text-xl mb-2'>Specifications:</label>
                    <div className=''>
                        <input
                            type='text'
                            name='power' value={values.power}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='mx-2 border-2 rounded-xl px-2 my-1 '
                            placeholder='Power' />KW
                        {errors.power && touched.power ? <p className='text-red-400'>{errors.power}</p> : null}

                        <input
                            type='text'
                            name='voltage'
                            value={values.voltage}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='mx-2 border-2 rounded-xl px-2 my-1'
                            placeholder='Voltage' />V
                        {errors.voltage && touched.voltage ? <p className='text-red-400'>{errors.voltage}</p> : null}

                        <input
                            type='text'
                            name='current'
                            value={values.current}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='mx-2 border-2 rounded-xl px-2 my-1'
                            placeholder='Current' />AMP
                        {errors.current && touched.current ? <p className='text-red-400'>{errors.current}</p> : null}

                        <input type='text'
                            name='speed'
                            value={values.speed}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='mx-2 border-2 rounded-xl px-2 my-1'
                            placeholder='Speed' />RPM
                        {errors.speed && touched.speed ? <p className='text-red-400'>{errors.speed}</p> : null}

                    </div>
                </div>
                <button type='submit' className='border-2 rounded-xl bg-orange-400 text-white p-4 w-64' >Add Asset</button>
            </form>
        </div>
    )
}