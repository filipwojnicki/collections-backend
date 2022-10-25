import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({ charset: 'utf8mb4' })
export class Tag extends Model<Tag> {
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

  @CreatedAt public createdAt: Date;
  @UpdatedAt public updatedAt: Date;
}
