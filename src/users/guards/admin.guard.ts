import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../roles/role.enum';
import { UsersService } from '../service/users.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly userService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const { user } = context.switchToHttp().getRequest();

    if (!user) {
      return false;
    }

    const roleData = await this.userService.getRoleByUserId(user.id);

    if (roleData.role === Role.Admin) {
      return true;
    }

    return false;
  }
}
