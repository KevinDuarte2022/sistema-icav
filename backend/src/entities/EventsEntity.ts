import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CoreCRUDEntity } from "./CoreCRUDEntity";


@Entity({ schema: 'public', name: 'events' })
export class EventsEntity extends CoreCRUDEntity {
  
  @Column({ type: 'date', name: 'event_date' })
  eventDate: Date;

  @Column({ type: 'varchar', length: 15 })
  weekday: string;

  @Column({ type: 'varchar', length: 255, name: 'description', nullable: true })
  description: string;

}
