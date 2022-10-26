import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../model/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  findOne(id: number) {
    return this.userModel.findOne({ where: { id } });
  }

  findOneByEmail(email: string) {
    return this.userModel.findOne({ where: { email } });
  }
}
