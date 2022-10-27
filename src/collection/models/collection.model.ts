import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { User } from '../../users/model/user.model';
import { Item } from './item.model';
import { CustomField } from './customField.model';

@Table({ charset: 'utf8mb4' })
export class Collection extends Model<Collection> {
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

  @Column({
    type: DataType.TEXT({ length: 'long' }),
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.CHAR(255),
    allowNull: false,
    defaultValue: '',
  })
  topic: string;

  @Column({
    type: DataType.CHAR(255),
    allowNull: true,
    defaultValue: null,
  })
  image: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Item)
  items: Item[];

  @HasMany(() => CustomField)
  customFields: CustomField[];

  @CreatedAt public createdAt: Date;

  @UpdatedAt public updatedAt: Date;
}
