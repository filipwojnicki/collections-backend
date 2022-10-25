import { Module } from '@nestjs/common';
import { AppController } from './App/controller/app.controller';
import { AppService } from './App/service/app.service';
import { CollectionModule } from './collection/collection.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    CollectionModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.MYSQLDB_HOST,
      port: parseInt(process.env.MYSQLDB_DOCKER_PORT, 10) || 3306,
      username: process.env.MYSQLDB_USER,
      password: process.env.MYSQLDB_ROOT_PASSWORD,
      database: process.env.MYSQLDB_DATABASE,
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
