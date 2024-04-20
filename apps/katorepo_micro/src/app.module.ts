import {  Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Usuario } from './usuario.entity'; //importa usuario
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db/db.db',//Ruta de la base de datos SQlite
      entities: [Usuario], //Lista de entidades a incluir la conexion
      synchronize: true, //Sicroniza automatiza la estructura de la base de datos 
    }),
    TypeOrmModule.forFeature([Usuario]),// Incluye usuario 
    ClientsModule.register([
      {
        name: 'USUARIO_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379,
        }
      },
    ]),
  ],        
      controllers: [AppController],
      providers: [AppService],
  })
  export class AppModule{}