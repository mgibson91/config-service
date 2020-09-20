import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Correctly sets and gets value', async() => {
    const testData = [
      { key1: 'val1' },
      { key1: 'val1a' },
    ]

    await request(app.getHttpServer()).post('/').send(testData[0]).expect(201);

    let result = await request(app.getHttpServer()).get('/').query(testData[0]).expect(200);
    expect(result.body).toMatchObject(testData[0]);

    await request(app.getHttpServer()).post('/').send(testData[1]).expect(201);

    result = await request(app.getHttpServer()).get('/').query(testData[1]).expect(200);
    expect(result.body).toMatchObject(testData[1]);

    // Reset
    await request(app.getHttpServer()).post('/reset').send().expect(201);

    result = await request(app.getHttpServer()).get('/').query({ }).expect(200);
    expect(result.body).toMatchObject({ });
  });
});
