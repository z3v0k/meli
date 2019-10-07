import express from 'express';
import Router from './router';
import cors from 'cors';
import * as bodyParser from 'body-parser';

class App {
  private httpServer: any;

  constructor() {
    this.httpServer = express();

    this.httpServer.use(bodyParser.urlencoded({ extended: true }));
    this.httpServer.use(bodyParser.json());
    this.httpServer.use(cors());

    new Router(this.httpServer);
  }

  public Start = (port: number) => {
    return new Promise((resolve, reject) => {
      this.httpServer
        .listen(port, () => {
          resolve(port);
        })
        .on('error', (err: object) => reject(err));
    });
  };
}

export default App;
