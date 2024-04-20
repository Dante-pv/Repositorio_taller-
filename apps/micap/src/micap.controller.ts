import { Controller, Get } from '@nestjs/common';
import { MicapService } from './micap.service';
import { EventPattern } from '@nestjs/microservices';
@Controller()
export class MicapController {
  constructor(private readonly micapService: MicapService) {}

 /* @Get()
  getHello(): string {
    return this.micapService.getHello();
  }*/
  @EventPattern('new_mail')
  handleNewMail(data:any){
    console.log('Este es el evento main:',data)
  }
}