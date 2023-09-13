import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsPositive,
  IsArray,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly title: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  readonly chapters: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  readonly pages: number;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  readonly authorsIds: number[];
}

export class CreateAuthorDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;
}
