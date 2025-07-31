import {Pool} from 'pg';

export const pool = new Pool({
    user:"postgres",
    password:"0707",
    host:"localhost",
    port:5432,
    database:"todo" 
})