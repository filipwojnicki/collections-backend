import { Module } from '@nestjs/common';
import { AppController } from './App/controller/app.controller';
import { AppService } from './App/service/app.service';
import { CollectionModule } from './collection/collection.module';

@Module({
  imports: [CollectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
