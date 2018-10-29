import { Room } from 'colyseus';

export default class ChatRoom extends Room {
    // maximum number of clients per active session
    maxClients = 4;
    constructor(){
        super();
        this.maxClients = 4;
    }

    onInit () {
        this.setState({ messages: [] });
    }
    onJoin (client) {
        this.state.messages.push(`${ client.sessionId } joined.`);
    }
    onMessage (client, data) {
        this.state.messages.push(data);
    }
}