import { Column, CreateDateColumn, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./UserEntity";

export abstract class CoreCRUDEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'created_by' })
    createdBy: UserEntity;

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'updated_by'})
    updateBy: UserEntity
}