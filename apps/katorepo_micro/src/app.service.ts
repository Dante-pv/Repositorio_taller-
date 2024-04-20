import { Inject,Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { Usuario } from './usuario.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  private usuario: ClientProxy;
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>
  ){
    this.usuario= ClientProxyFactory.create({
      transport: Transport.REDIS,
      options:{
        host: 'localhost',
        port:6379
      }
    })
  }

  async newUsuario(user:any): Promise<string>{
    try{
      const nuevoUsusrio = this. usuarioRepository.create(user);
      await this.usuarioRepository.save(nuevoUsusrio);
      return 'Usuario agragado a la base de datos';
    }catch(error){
      throw new Error('Error ${error.message');
    }
    
  }

}