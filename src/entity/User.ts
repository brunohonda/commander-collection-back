import { Entity, ObjectIdColumn, ObjectID, Column } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn() _id!: ObjectID;

  @Column() firstName!: string;

  @Column() lastName!: string;

  @Column() age!: number;
}
