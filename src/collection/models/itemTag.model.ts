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

import { Tag } from './tag.model';
import { Item } from './item.model';

@Table({ charset: 'utf8mb4' })
export class ItemTag extends Model {
  @Column({
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  public id: number;

  @ForeignKey(() => Item)
  @Column
  itemId: number;

  @BelongsTo(() => Item)
  item: Item;

  @ForeignKey(() => Tag)
  @Column
  tagId: number;

  @BelongsTo(() => Tag)
  tag: Tag;

  @CreatedAt public createdAt: Date;

  @UpdatedAt public updatedAt: Date;
}
