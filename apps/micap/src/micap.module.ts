import { Module } from '@nestjs/common';
import { MicapController } from './micap.controller';
import { MicapService } from './micap.service';

@Module({
  imports: [],
  controllers: [MicapController],
  providers: [MicapService],
})
export class MicapModule {}