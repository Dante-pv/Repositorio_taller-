import { Injectable } from '@nestjs/common';

@Injectable()
export class MicapService {
  getHello(): string {
    return 'Hola estoy en puerto 3001';
  }
}