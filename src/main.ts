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
    .addBearerAuth()
    .setDescription(
      'API for managing the FoodDash food delivery system. It provides endpoints for order management, real-time tracking, user and restaurant management, and other features related to the food delivery process.',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document, {
    customCss: `
      .swagger-ui .topbar { background-color: #111719; }
      .swagger-ui .info .title { color: #FE724C; }
      .swagger-ui .info .title small.version-stamp { background-color: #FFC529 !important; }
      .swagger-ui .opblock.opblock-get { background-color: rgba(255, 197, 41, 0.1); border-color: rgba(255, 197, 41, 1) }
      .swagger-ui .opblock.opblock-get .opblock-summary-method { background-color: rgba(255, 197, 41, 1) }
    `,
    customSiteTitle: 'FoodDash API',
    customfavIcon:
      'https://files.joseperezgil.com/images/portfolio/fooddash/logo.png',
  });

  await app.listen(+process.env.SERVER_PORT! || 3000);
}
bootstrap();
