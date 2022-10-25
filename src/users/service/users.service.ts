import { Injectable } from '@nestjs/common';
import { User } from '../model/user.model';

@Injectable()
export class UsersService {
  constructor(private readonly userModel: typeof User) {}

  findOne(id) {
    return this.userModel.findOne({ where: { id } });
  }
}
