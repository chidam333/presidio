export async function load({locals}){
    const {sql} = locals
    let events = []
    try{
        events = await sql`select * from events;`
    }catch(err){
        console.log({err})
    }
    return {events}
}