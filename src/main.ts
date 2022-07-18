import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //swagger options config
  const config = new DocumentBuilder()
  .setTitle("Course API")
  .setVersion("1.0")
  .setDescription("Api related to course")
  .build();

  //swagger
  const document = SwaggerModule.createDocument(app, config);
  
  //veremos a documentacao na rota "/api" que ficara a documentacao, escolhe-se ali a URL;
  SwaggerModule.setup("swagger", app, document);
  //http://localhost:3000/swagger/
  
  await app.listen(3000);
  
}
bootstrap();


