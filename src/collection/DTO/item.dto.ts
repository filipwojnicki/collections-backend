import {
  IsAlphanumeric,
  Length,
  IsInt,
  IsOptional,
  IsString,
  IsDateString,
  IsBoolean,
} from 'class-validator';

export class ItemDto {
  @IsInt()
  collectionId: number;

  @IsAlphanumeric()
  @Length(1, 255)
  name: string;

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
  @IsInt()
  int1: number;

  @IsOptional()
  @IsInt()
  int2: number;

  @IsOptional()
  @IsInt()
  int3: number;

  @IsOptional()
  @IsString()
  text1: string;

  @IsOptional()
  @IsString()
  text2: string;

  @IsOptional()
  @IsString()
  text3: string;

  @IsOptional()
  @IsBoolean()
  bool1: boolean;

  @IsOptional()
  @IsBoolean()
  bool2: boolean;

  @IsOptional()
  @IsBoolean()
  bool3: boolean;

  @IsOptional()
  @IsDateString()
  date1: Date;

  @IsOptional()
  @IsDateString()
  date2: Date;

  @IsOptional()
  @IsDateString()
  date3: Date;
}
