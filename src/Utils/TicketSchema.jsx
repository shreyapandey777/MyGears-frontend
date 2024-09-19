import * as Yup from 'yup'

export const TicketSchema = Yup.object({
    ticketId:Yup.string().min(6).max(12).required('Please enter Ticket ID'),
    assetId:Yup.string().min(6).max(12).required('Please enter Asset Id'),
    status:Yup.string().oneOf(['Open', 'Resolved', 'In-Progress'], 'Invalid Status').required('Please Enter Current Status'),
    issueDescription:Yup.string().required('Please Enter Issue '),
    date:Yup.date().required('Please Enter Date')
})