import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import { router } from '../routes/user.routes.js';
dotenv.config();

export class Server {
    constructor(){
        this.PORT = process.env.PORT
        this.app = express()
        //Middleware
        this.middleware();
        //Routing
        this.routing();
    }
    middleware() {
        this.app.use(morgan('dev'))
        this.app.use(express.static('public'))
        this.app.use(cors())
    }
    routing() {
        this.app.use('/api/users', router);
    }

    listing() {
        this.app.listen(this.PORT, ()=>{
            console.log(`Server listing on port ${this.PORT}`);
        })
    }
}