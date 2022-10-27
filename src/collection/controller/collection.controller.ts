import { Body, Controller, Get, Post } from '@nestjs/common';
import { CollectionService } from '../service/collection.service';

import { CollectionDto } from '../DTO/collection.dto';
import { CustomFieldDto } from '../DTO/customField.dto';
import { TagDto } from '../DTO/tag.dto';
import { ItemDto } from '../DTO/item.dto';

@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Get('/all')
  getAllCollections() {
    return 1;
    // return this.collectionService.test();
  }

  @Post('/add')
  addCollection(
    @Body()
    collectionDto: CollectionDto,
  ) {
    return this.collectionService.createCollection(collectionDto);
  }

  @Post('/addCustomFields')
  addCustomFields(@Body() customFieldDto: CustomFieldDto) {
    return this.collectionService.createCustomFields(customFieldDto);
  }

  @Post('/addTag')
  addTag(@Body() tagDto: TagDto) {
    return this.collectionService.createTag(tagDto);
  }

  @Post('/addItem')
  addItem(@Body() itemDto: ItemDto) {
    return this.collectionService.createItem(itemDto);
  }

  @Get('/getLatestItems')
  getLatestItems() {
    return this.collectionService.getLatestItems();
  }

  @Get('/getLargest')
  getLargestCollection() {
    return this.collectionService.getLargestCollection();
  }
}
