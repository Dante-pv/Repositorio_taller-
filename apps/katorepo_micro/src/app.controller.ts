import { Body,Controller, Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async newUsuario(@Body() body:any): Promise<string>{
    return await this.appService.newUsuario(body)
  }
  
}