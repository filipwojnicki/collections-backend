import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import { Collection } from './collection.model';

@Table({ charset: 'utf8mb4' })
export class CustomField extends Model<CustomField> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  public id: number;

  @ForeignKey(() => Collection)
  @Column
  collectionId: number;

  @BelongsTo(() => Collection)
  collection: Collection;

  @Column({
    type: DataType.CHAR(255),
    allowNull: true,
    defaultValue: null,
  })
  string1: string;

  @Column({
    type: DataType.CHAR(255),
    allowNull: true,
    defaultValue: null,
  })
  string2: string;

  @Column({
    type: DataType.CHAR(255),
    allowNull: true,
    defaultValue: null,
  })
  string3: string;

  @Column({
    type: DataType.CHAR(255),
    allowNull: true,
    defaultValue: null,
  })
  int1: string;

  @Column({
    type: DataType.CHAR(255),
    allowNull: true,
    defaultValue: null,
  })
  int2: string;

  @Column({
    type: DataType.CHAR(255),
    allowNull: true,
    defaultValue: null,
  })
  int3: string;

  @Column({
    type: DataType.CHAR(255),
    allowNull: true,
    defaultValue: null,
  })
  text1: string;

  @Column({
    type: DataType.CHAR(255),
    allowNull: true,
    defaultValue: null,
  })
  text2: string;

  @Column({
    type: DataType.CHAR(255),
    allowNull: true,
    defaultValue: null,
  })
  text3: string;

  @Column({
    type: DataType.CHAR(255),
    allowNull: true,
    defaultValue: null,
  })
  bool1: string;

  @Column({
    type: DataType.CHAR(255),
    allowNull: true,
    defaultValue: null,
  })
  bool2: string;

  @Column({
    type: DataType.CHAR(255),
    allowNull: true,
    defaultValue: null,
  })
  bool3: string;

  @Column({
    type: DataType.CHAR(255),
    allowNull: true,
    defaultValue: null,
  })
  date1: string;

  @Column({
    type: DataType.CHAR(255),
    allowNull: true,
    defaultValue: null,
  })
  date2: string;

  @Column({
    type: DataType.CHAR(255),
    allowNull: true,
    defaultValue: null,
  })
  date3: string;

  @CreatedAt public createdAt: Date;

  @UpdatedAt public updatedAt: Date;
}
