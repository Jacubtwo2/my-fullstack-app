// backend/src/users/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
  @ApiProperty({ example: 1, description: 'Unique ID for the user' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Jacub', description: 'Name of the user' })
  @Column()
  name: string;

  @ApiProperty({ example: 'jacub@example.com', description: 'User email' })
  @Column({ unique: true })
  email: string;
}
