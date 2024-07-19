import { redirect } from '@sveltejs/kit';

export const actions = {
    create:async ({locals,request})=>{
        const data= await request.formData();
        let eventName = data.get("event_name")
        let startDate = data.get("start_date")
        let startTime = data.get("start_time")
        let endDate = data.get("end_date")
        let endTime = data.get("end_time")
        let addy = data.get("addy")
        let desc = data.get("desc")
        let fees = parseInt(data.get("fees"))
        const {sql} = locals;
        let startDateJS = new Date(startDate)
        let endDateJS = new Date(endDate)
        let startTimeJS = new Date(`1970-01-01T${startTime}`)
        let endTimeJS = new Date(`1970-01-01T${endTime}`)
        // console.log('startDateJS == endDateJS',startDateJS == endDateJS)
        // console.log('startTimeJS>endTimeJS',startTimeJS>endTimeJS)
        if(startDateJS > endDateJS ){
            redirect(303,'start_end_error')
        }
        if(startDate == endDate && startTimeJS>endTimeJS){
            redirect(303,'start_end_error')
        }
        if(fees<0){
            redirect(303,'fees_negative')
        }
        console.log({eventName,startDate,startTime,endDate,endTime,addy,desc,fees})
        try{
            await sql`INSERT INTO events (event_name, start_date, start_time, end_date, end_time, address, description, fees)
            VALUES (
                ${eventName}, 
                ${startDate}, 
                ${startTime}, 
                ${endDate}, 
                ${endTime}, 
                ${addy}, 
                ${desc}, 
                ${fees}
            );
            `
        }catch(err){
            console.log({err})
            redirect(303, '/db_insert_error')
        }
        redirect(303,'/')
    },
    see: async({locals})=>{
        const {sql} = locals;
    }
}