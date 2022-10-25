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
export class Item extends Model<Item> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  public id: number;

  @Column({
    type: DataType.CHAR(255),
    allowNull: false,
    defaultValue: '',
  })
  name: string;

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
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: null,
  })
  int1: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: null,
  })
  int2: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: null,
  })
  int3: number;

  @Column({
    type: DataType.TEXT({ length: 'long' }),
    allowNull: true,
    defaultValue: null,
  })
  text1: string;

  @Column({
    type: DataType.TEXT({ length: 'long' }),
    allowNull: true,
    defaultValue: null,
  })
  text2: string;

  @Column({
    type: DataType.TEXT({ length: 'long' }),
    allowNull: true,
    defaultValue: null,
  })
  text3: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: null,
  })
  bool1: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: null,
  })
  bool2: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: null,
  })
  bool3: boolean;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
    defaultValue: null,
  })
  date1: Date;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
    defaultValue: null,
  })
  date2: Date;

  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
    defaultValue: null,
  })
  date3: Date;

  @CreatedAt public createdAt: Date;

  @UpdatedAt public updatedAt: Date;
}
