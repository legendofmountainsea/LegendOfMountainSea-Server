import { Room } from 'colyseus';

export default class ChatRoom extends Room {

    constructor(){
        super();
        this.maxClients = 4;
    }

    onInit () {
        this.setState({ messages: [] });
    }
    onJoin (client) {
        this.state.messages.push(`A new player(${ client.sessionId }) has joined.`);
    }
    onMessage (client, data) {
        this.state.messages.push(data);
    }
}