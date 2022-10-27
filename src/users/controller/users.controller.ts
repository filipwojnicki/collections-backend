import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../service/users.service';

import { UserDto } from '../DTO/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/add')
  async addUser(@Body() userDto: UserDto) {
    return this.usersService.createUser(userDto);
  }
}
