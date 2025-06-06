import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CoreCRUDEntity } from "./CoreCRUDEntity";


@Entity({ schema: 'financial', name: 'input_output' })
export class InputOutput extends CoreCRUDEntity {
  
  @Column({ type: 'date', name: 'evente_date' })
  eventDate: Date;

  @Column({ type: 'varchar', length: 20 })
  weekday: string;

  @Column({ type: 'varchar', length: 255, name: 'event_description', nullable: true })
  eventDescription: string;

}
