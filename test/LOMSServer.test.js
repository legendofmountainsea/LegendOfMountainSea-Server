import expect from 'expect.js';
import LOMSServer from '../src/LOMSServer';

describe("LOMSServer",() => {
    let lomsServer;

    beforeEach(() => {
        lomsServer = new LOMSServer({ port: 1126 });

    });

    it("should be start by default",() => {
        expect(lomsServer.isStart()).to.not.be.ok();
    });

});