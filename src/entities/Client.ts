import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
@Entity("clients")
class Client {
  @PrimaryColumn()
  readonly id!: string;
  @Column()
  name!: string;
  @Column()
  telefone!: string;
  @Column()
  email!: string;
  @Column()
  password!: string;
  @Column()
  cpf!: string;
  @Column()
  endereco!: string;
  @Column()
  cidade!: string;
  @Column()
  estado!: string;
  @Column()
  bairro!: string;

  @CreateDateColumn()
  created_at!: Date;
  @UpdateDateColumn()
  updated_at!: Date;
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
export { Client };
