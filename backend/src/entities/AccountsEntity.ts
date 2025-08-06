import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CoreCRUDEntity } from "./CoreCRUDEntity";


@Entity({ schema: 'financial', name: 'accounts' })
export class AccountsEntity extends CoreCRUDEntity {
  
  @Column({ type: 'varchar', name: 'name' })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  type: string;

@Column({ type: 'numeric', precision: 12, scale: 2, name: 'initial_balance', nullable: true })
initialBalance: number;

}
