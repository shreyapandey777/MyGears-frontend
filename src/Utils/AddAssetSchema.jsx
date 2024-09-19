import * as Yup from "yup"

export const AddAssetScehema = Yup.object({
    assetId: Yup.string().min(6).max(12).required("Please Enter Asset Id"),

    name: Yup.string().min(6).max(20).required("Please Enter Asset Name"),

    description: Yup.string().min(10).max(200).required("Please Enter Asset Description"),

    location: Yup.string().min(2).max(50).required("Please Enter Asset Location"),

    manufacturer: Yup.string().min(2).max(15).required("Please Enter Asset Manufacturer"),

    modelNo: Yup.string().min(4).max(50).required("Please Enter Asset Model No"),

    serialNo: Yup.string().min(4).max(12).required("Please Enter Asset Serial No"),

    insDate: Yup.date().required("Please Enter Asset Installation Date"),

    mnsDate: Yup.date().required("Please Enter Asset Last Maintenance Date"),

    status: Yup.string().min(4).max(20).required("Please Enter Asset Status"),

    power: Yup.number().min(1).max(100000).required("Please Enter Asset Power").positive().integer(),

    voltage: Yup.number().min(20).max(11000).required("Please Enter Asset Voltage").positive().integer(),

    current: Yup.number().min(1).max(1000).required("Please Enter Asset Current").positive().integer(),

    speed: Yup.number().min(100).max(10000).required("Please Enter Asset Speed").positive().integer()
})
