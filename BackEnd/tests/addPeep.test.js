import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import app from '../server.js';

chai.use(chaiHttp);

describe.skip('POST /addPeep', () => {

it("Should add a new peep", async () => {
    const res = await chai.request(app)
        .post('/addPeep')
        .send({ 
        firstName: 'John',
        lastName: 'Doe',
        peepContent: 'This is a peep.',
        dateAndTimePosted: 'Fri, 02 Dec 2022 10:53:43 GMT'});

    expect(res).to.have.status(201)
    expect(res.text).to.include('Peep successfully added');
});


it('should return error if there are validation errors', async() => {
    const res =await chai.request(app)
      .post('/addPeep')
      .send({})
        expect(res).to.have.status(400);
        expect(res.body.errors).to.equal('Adding peep failed');
      });
  });

