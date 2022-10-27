import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from '../service/users.service';

import { UserDto } from '../DTO/user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AdminGuard } from '../guards/admin.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/add')
  async addUser(@Body() userDto: UserDto) {
    return this.usersService.createUser(userDto);
  }

  @UseGuards(JwtAuthGuard, AdminGuard)
  @Get('/checkRole')
  getUserRole() {
    return 'ok';
  }
}
