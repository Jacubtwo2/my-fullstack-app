// backend/src/app.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot() {
    return { message: 'Hello World!' };
  }

  @Get('api/hello')
  getHello() {
    return { message: 'Hello from Nest backend!' };
  }
}
