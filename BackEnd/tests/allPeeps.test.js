import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import Peep from '../models/peep.js';
describe.skip(`GET /allPeeps`, () => {

    it(`should return all of the peeps as an array`, async () => {
        const res = await chai.request(server)
            .get(`/allPeeps`)
            .send();

        expect(res).to.have.status(200);
        expect(res.body).to.be.an(`array`);
        expect(res.body.length).to.be.eql(testDataArray.length);
    });

    it(`should return 404 when there is no peeps`, async () => {
        await Peep.deleteMany();
        const res = await chai.request(server)
            .get(`/allPeeps`)
            .send();

        expect(res).to.have.status(404);
        expect(res.body.error).to.equal("Peeps could not be found");
    });

});