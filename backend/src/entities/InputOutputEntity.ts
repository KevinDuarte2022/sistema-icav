import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ schema: 'financial', name: 'input_output' })
export class InputOutput {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'date', name: 'evente_date' })
  eventDate: Date;

  @Column({ type: 'varchar', length: 20 })
  weekday: string;

  @Column({ type: 'varchar', length: 255, name: 'event_description', nullable: true })
  eventDescription: string;

  @Column({ type: 'timestamp', name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
