import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('FoodDash API')
    .setDescription(
      'API for managing the FoodDash food delivery system. It provides endpoints for order management, real-time tracking, user and restaurant management, and other features related to the food delivery process.',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document, {
    customCss: `
      .swagger-ui .topbar { background-color: #111719; }
      .swagger-ui .info { background-color: #ffffff; }
      .swagger-ui .info .title { color: #FE724C; }
      .swagger-ui .btn.authorize { background-color: #007bff; }
      .swagger-ui .info .title small.version-stamp { background-color: #FFC529 !important; }
      .swagger-ui .info .description::before {
        content: url('https://example.com/my-logo.png'); /* URL de tu logo */
        display: block;
        margin-bottom: 10px;
      }
    `,
    customSiteTitle: 'FoodDash API',
    customfavIcon:
      'https://files.joseperezgil.com/images/portfolio/fooddash/logo.png',
  });

  await app.listen(+process.env.SERVER_PORT! || 3000);
}
bootstrap();
