import { IsAlphanumeric, IsOptional, IsString, Length } from 'class-validator';

export class CollectionDto {
  @IsAlphanumeric()
  @Length(1, 255)
  name: string;

  @IsString()
  description: string;

  @IsString()
  @Length(1, 255)
  topic: string;

  @IsOptional()
  @IsString()
  @Length(1, 255)
  image: string;
}
