import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    // 1) load .env
    ConfigModule.forRoot({ isGlobal: true }),

    // 2) connect to Postgres using env vars
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT ?? 5432),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        // Let Nest find your entities automatically
        autoLoadEntities: true,
        // DEV ONLY: auto create/update tables from entities
        synchronize: true,
        // Log SQL in console (handy for debugging)
        logging: false,
      }),
    }),

    // your feature modules
    UsersModule,
  ],
})
export class AppModule {}
