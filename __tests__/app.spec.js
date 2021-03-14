import request from 'supertest';
import app from '../server/app';

describe('get /photos/:id', () => {
  it('should return a 200 if the photo gallery exists', async () => {
    const response = await request(app).get('/photos/1');
    expect(response.status).toBe(200);
  });

  it('should respond with the correct photo gallery if it exists', async () => {
    const response = await request(app).get('/photos/1');
    expect(response.body.listingId).toBe(1);
  });

  it('should return an empty object if the photo gallery does not exist', async () => {
    const response = await request(app).get('/photos/101');
    expect(response.body).toStrictEqual({});
  });
});

