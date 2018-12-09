//@flow
import * as http from 'http';
import { Server } from 'colyseus';

import ChatRoom from './room/ChatRoom';

type LOMSServerPropsType = {
    port?: number;
}

class LOMSServer {
    _isStart: boolean;
    _port: number;
    _httpServer: http.Server;
    _gameServer: Server;

    constructor(props: LOMSServerPropsType){
        this._isStart = false;
        this._port = props.port || 1126;
    }

    isStart(): boolean {
        return this._isStart;
    }

    start(): void{
        try{
            this._httpServer = http.createServer();
            this._gameServer = new Server({server: this._httpServer});
            this._gameServer.register('chat', ChatRoom);
            this._gameServer.listen(this._port);
            this._isStart = true;
            console.log(`LOMS server start listen on: ${this._port}`);
        } catch (e) {
            console.log(e);
        }
    }
}

export {LOMSServer};