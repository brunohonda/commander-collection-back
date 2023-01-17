import { Entity, ObjectIdColumn, ObjectID, Column, CreateDateColumn, UpdateDateColumn, VersionColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn() _id!: ObjectID;

  @Column()
  username!: string;

  @Column()
  password!: string;

  @Column()
  salt!: string;

  @CreateDateColumn()
  createdAt = new Date();

  @UpdateDateColumn()
  updatedAt!: Date;

  @VersionColumn()
  version!: number;
}
