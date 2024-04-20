import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ length: 20 })
    Nombre: String;

    @Column({ length: 100})
    Correo: String; 
}