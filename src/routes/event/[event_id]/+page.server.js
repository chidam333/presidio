export async function load({ locals,params }) {
    const {sql} = locals;
    let event_det = null;
    try{
        event_det = await sql`select * from events where event_id=${params.event_id}`;
    }catch(err){
        console.log({err})
    }
    console.log({event_det})
    return {event_det}
}