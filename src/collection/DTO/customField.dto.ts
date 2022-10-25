import { IsAlphanumeric, Length, IsInt, IsOptional } from 'class-validator';

export class CustomFieldDto {
  @IsInt()
  collectionId: number;

  @IsOptional()
  @IsAlphanumeric()
  @Length(1, 255)
  string1: string;

  @IsOptional()
  @IsAlphanumeric()
  @Length(1, 255)
  string2: string;

  @IsOptional()
  @IsAlphanumeric()
  @Length(1, 255)
  string3: string;

  @IsOptional()
  @IsAlphanumeric()
  @Length(1, 255)
  int1: string;

  @IsOptional()
  @IsAlphanumeric()
  @Length(1, 255)
  int2: string;

  @IsOptional()
  @IsAlphanumeric()
  @Length(1, 255)
  int3: string;

  @IsOptional()
  @IsAlphanumeric()
  @Length(1, 255)
  text1: string;

  @IsOptional()
  @IsAlphanumeric()
  @Length(1, 255)
  text2: string;

  @IsOptional()
  @IsAlphanumeric()
  @Length(1, 255)
  text3: string;

  @IsOptional()
  @IsAlphanumeric()
  @Length(1, 255)
  bool1: string;

  @IsOptional()
  @IsAlphanumeric()
  @Length(1, 255)
  bool2: string;

  @IsOptional()
  @IsAlphanumeric()
  @Length(1, 255)
  bool3: string;

  @IsOptional()
  @IsAlphanumeric()
  @Length(1, 255)
  date1: string;

  @IsOptional()
  @IsAlphanumeric()
  @Length(1, 255)
  date2: string;

  @IsOptional()
  @IsAlphanumeric()
  @Length(1, 255)
  date3: string;
}
