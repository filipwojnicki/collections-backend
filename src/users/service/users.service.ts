import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserDto } from '../DTO/user.dto';
import { User } from '../model/user.model';

import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async createUser(userDto: UserDto) {
    userDto.password = bcrypt.hashSync(userDto.password, 10);

    const user = new User(userDto);

    const userData = await user.save();

    if (!userData) {
      throw new Error('No user data');
    }

    return true;
  }

  findOne(id: number) {
    return this.userModel.findOne({ where: { id } });
  }

  findOneByEmail(email: string) {
    return this.userModel.findOne({ raw: true, where: { email } });
  }
}
