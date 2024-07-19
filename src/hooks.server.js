import postgres from 'postgres'
import {POSTGRES_URL} from '$env/static/private'

const sqlClient = postgres(POSTGRES_URL);

export async function handle({event,resolve}){
    event.locals = {
        sql:sqlClient
    }
    const response = await resolve(event)
    return response
}
