import { IsAlphanumeric, IsEmail, Length } from 'class-validator';

export class UserDto {
  @IsAlphanumeric()
  @Length(1, 255)
  name: string;

  @IsEmail()
  email: string;

  @IsAlphanumeric()
  @Length(1, 255)
  password: string;
}
