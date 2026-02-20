import { Body, Controller, Delete, ParseIntPipe, Post, Query } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { TagsService } from './providers/tags.service';

@Controller('tags')
export class TagsController {
    constructor(
        /**
         * Inject Tags Service
         */
        private readonly tagsService: TagsService,
    ){}

    @Post()
    public async create(@Body() createTagDto: CreateTagDto){
        return await this.tagsService.create(createTagDto);
    }

    @Delete()
    public async delete(@Query('id', ParseIntPipe) id: number){
        return await this.tagsService.delete(id);
    }

    // /tags/soft-delete
    @Delete('soft-delete')
    public async softDelete(@Query('id', ParseIntPipe) id: number){
        return await this.tagsService.softRemove(id);
    }
}
