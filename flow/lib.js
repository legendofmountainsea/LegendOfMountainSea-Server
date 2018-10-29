declare module 'colyseus' {
    declare export class Server{
        constructor(...args:any): Server;
        listen(number): void;
        register(...args:any): void;
        shutdown():Promise<void>;
    }
    declare export default any;
}