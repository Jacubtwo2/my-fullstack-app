import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));

  const config = new DocumentBuilder()
    .setTitle('My Fullstack API')
    .setDescription('API documentation for my backend')
    .setVersion('1.0')
    .addTag('users')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: { persistAuthorization: true },
    customSiteTitle: 'My Backend API Docs',
  });

  // allow your Next dev ports (from .env too if you want)
  app.enableCors({
    origin: (process.env.FRONTEND_ORIGINS || '').split(',').filter(Boolean),
    credentials: true,
  });

  // IMPORTANT for both local and cloud that the port is on 3001
  const port = Number(process.env.PORT || 3001);
  await app.listen(port);
  console.log(`🚀 Backend running on: http://localhost:${port}`);
  console.log(`📘 Swagger docs at: http://localhost:${port}/docs`);
}
bootstrap();
