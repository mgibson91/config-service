import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    const testData = [
      { key1: 'val1' },
      { key1: 'val1a' },
    ];

    it('should write and read"', () => {
      expect(() => appController.set(testData[0])).not.toThrowError();
      expect(appController.get()).toMatchObject(testData[0]);

      expect(() => { appController.set(testData[1]) }).not.toThrowError();
      expect(appController.get()).toMatchObject(testData[1]);

      expect(() => { appController.reset() }).not.toThrowError();
      expect(appController.get()).toMatchObject({ });

      expect(() => { appController.reset({ test: 'yes' }) }).not.toThrowError();
      expect(appController.get()).toMatchObject({ test: 'yes' });
    });
  });
});
