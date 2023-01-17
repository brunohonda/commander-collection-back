import crypto from 'node:crypto';
import { BeforeInsert, Column, CreateDateColumn, Entity, Index, ObjectID, ObjectIdColumn, UpdateDateColumn, VersionColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn() _id!: ObjectID;

  @Column()
  @Index({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @Column()
  salt!: string;

  @CreateDateColumn()
  createdAt = new Date();

  @UpdateDateColumn()
  updatedAt!: Date;

  @BeforeInsert()
  hashPassword (): void {
    this.salt = crypto.randomBytes(256).toString('hex');
    this.password = crypto.createHmac('sha256', this.salt)
      .update(`${ this.password }${ this.salt }`)
      .digest('hex');
  }
}
