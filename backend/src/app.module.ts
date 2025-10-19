import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,          // your Postgres port (keep 5432 as shown)
      username: 'macbook',
      password: '',
      database: 'my_fullstack_db',
      entities: [User],    // or use: autoLoadEntities: true
      synchronize: true,   // auto-create tables in dev
    }),
    UsersModule,
  ],
})
export class AppModule {}
