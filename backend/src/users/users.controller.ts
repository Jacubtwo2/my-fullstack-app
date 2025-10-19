import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @Get()
  getAll() {
    return this.users.findAll();
  }

  @Post()
  create(@Body() body: { name: string; email: string }) {
    return this.users.create(body.name, body.email);
  }
}
