import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { CollectionService } from './service/collection.service';
import { CollectionController } from './controller/collection.controller';

import { Collection } from './models/collection.model';
import { Item } from './models/item.model';
import { CustomField } from './models/customField.model';
import { Tag } from './models/tag.model';
import { ItemTag } from './models/itemTag.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Collection, Item, CustomField, Tag, ItemTag]),
  ],
  providers: [CollectionService],
  controllers: [CollectionController],
})
export class CollectionModule {}
