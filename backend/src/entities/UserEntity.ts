// UserEntity.ts (sem extends)
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'public', name: 'user' })
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', name: 'name' })
    name: string;

    @Column({ type: 'varchar', name: 'email' })
    email: string;

    @Column({ type: 'varchar', name: 'password_hash' })
    passwordHash: string;
}
