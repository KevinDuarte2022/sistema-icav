import { Column, Entity } from "typeorm";
import { CoreCRUDEntity } from "./CoreCRUDEntity";


@Entity({ schema: 'public', name: 'user' })
export class UserEntity extends CoreCRUDEntity {
    @Column({ type: 'varchar', name: 'name' })
    name: string;
    @Column({ type: 'varchar', name: 'email' })
    email: string;
    @Column({ type: 'varchar', name: 'password_hash' })
    passwordHash: string;

}