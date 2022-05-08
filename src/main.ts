import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as expressHbs from "express-handlebars";
import * as hbs from 'hbs';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.setBaseViewsDir(join(__dirname, '..', 'views'));


  app.engine(
    'hbs',
    expressHbs.engine({ //  .engine
      layoutsDir: join(__dirname, '..', 'views/layouts'),
      defaultLayout: 'layout',
      extname: 'hbs',
    }),
  );

  app.setViewEngine('hbs');
  hbs.registerPartials(__dirname + '/views/partials');
  await app.listen(3000);
}
bootstrap();
