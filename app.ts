process.env.NODE_ENV = 'production';
process.setMaxListeners(0);
import * as express from 'express';
import { ExpressServer, HTTPMethod } from './class/class.server';
import { RoutesHandler } from './class/class.routeshandler';
import { MySqlDatabase } from './class/class.mysql-database';
import { CryptoFunctions } from './class/class.crypto-functions';
import * as appConfig from "./config/app.json";

// const appConfig = require('./config/app.json');
const dbConfig = require('./config/db.json');

var mongoose = require('mongoose');
const server: ExpressServer = new ExpressServer();
const routesHandler: RoutesHandler = new RoutesHandler();

export class MyApp {        
    static appConfig = appConfig;

    constructor(){
        this.generateRoutings();
    }

    private generateRoutings() {
        /* Example routing */
        server.setRoute('/', (req: express.Request, res: express.Response) => {
            RoutesHandler.respond(res, req, {}, false, 'The server is working!');
        }, HTTPMethod.GET);

        //All Other Calls here
    }
}
new MyApp();

process.on('uncaughtException', function (err) {
    console.error(err.stack)
});