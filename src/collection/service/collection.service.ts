import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';

import { CollectionDto } from '../DTO/collection.dto';
import { Collection } from './../models/collection.model';

import { CustomFieldDto } from '../DTO/customField.dto';
import { CustomField } from '../models/customField.model';

import { Tag } from '../models/tag.model';
import { TagDto } from '../DTO/tag.dto';

import { Item } from '../models/item.model';
import { ItemDto } from '../DTO/item.dto';

@Injectable()
export class CollectionService {
  constructor(
    @InjectModel(Collection)
    private readonly collectionModel: typeof Collection,
    private readonly sequelize: Sequelize,
  ) {}

  async createCollection(collectionDto: CollectionDto) {
    try {
      const collection = new Collection(collectionDto);

      const collectionData = await collection.save();

      if (!collectionData) {
        throw new Error('No collection data');
      }

      if (!collectionData.id) {
        throw new Error('Collection id does not exist');
      }

      return { id: collectionData.id };
    } catch (err) {
      throw new HttpException(
        "Collection can't be created",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOneCollectionById(id) {
    return await this.collectionModel.findOne({
      where: { id },
    });
  }

  async createCustomFields(customFieldDto: CustomFieldDto) {
    const collection = await this.findOneCollectionById(
      customFieldDto.collectionId,
    );

    if (!collection) {
      throw new HttpException(
        'No collection matches this collection id',
        HttpStatus.NOT_FOUND,
      );
    }

    const customField = new CustomField(customFieldDto);
    const customFieldData = await customField.save();

    if (!customFieldData) {
      throw new Error('No collection data');
    }

    return true;
  }

  async createTag(tagDto: TagDto) {
    try {
      const tag = new Tag(tagDto);

      const tagData = await tag.save();

      if (!tagData) {
        throw new Error('No tag data');
      }

      if (!tagData.id) {
        throw new Error('Tag id does not exist');
      }

      return { id: tagData.id };
    } catch (err) {
      throw new HttpException(
        "Tag can't be created",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createItem(itemDto: ItemDto) {
    const collection = await this.findOneCollectionById(itemDto.collectionId);

    if (!collection) {
      throw new HttpException(
        'No collection matches this collection id',
        HttpStatus.NOT_FOUND,
      );
    }

    const item = new Item(itemDto);
    const itemData = await item.save();

    if (!itemData) {
      throw new Error('No collection data');
    }

    return true;
  }
}
