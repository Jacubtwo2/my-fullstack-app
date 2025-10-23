// backend/src/users/dto/update-user.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

// PartialType makes all fields optional for updates
export class UpdateUserDto extends PartialType(CreateUserDto) {}
