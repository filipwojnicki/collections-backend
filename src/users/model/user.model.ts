import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DataType,
} from 'sequelize-typescript';

@Table({ charset: 'utf8mb4' })
export class User extends Model {
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
    type: DataType.CHAR(255),
    allowNull: false,
    defaultValue: '',
  })
  email: string;

  @Column({
    type: DataType.CHAR(255),
    allowNull: false,
    defaultValue: '',
  })
  password: string;

  @Column({
    type: DataType.TINYINT,
    allowNull: false,
    defaultValue: 0,
  })
  role: string;

  @CreatedAt public createdAt: Date;

  @UpdatedAt public updatedAt: Date;
}
