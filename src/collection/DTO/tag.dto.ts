import { IsAlphanumeric, Length } from 'class-validator';

export class TagDto {
  @IsAlphanumeric()
  @Length(1, 255)
  name: string;
}
