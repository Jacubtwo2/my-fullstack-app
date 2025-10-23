// backend/src/users/dto/create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Jacub' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({ example: 'jacub@example.com' })
  @IsEmail()
  email: string;
}
