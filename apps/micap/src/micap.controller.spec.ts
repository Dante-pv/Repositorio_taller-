import { Test, TestingModule } from '@nestjs/testing';
import { MicapController } from './micap.controller';
import { MicapService } from './micap.service';

describe('MicapController', () => {
  let micapController: MicapController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MicapController],
      providers: [MicapService],
    }).compile();

    micapController = app.get<MicapController>(MicapController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(micapController.getHello()).toBe('Hello World!');
    });
  });
});
