import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('posts')
export class PostsController {

    constructor(
    /*
    * Injecting Posts Service
    */
   private readonly postsService: PostsService
    ){}

    /*
    * Get Posts by user id
    */
   @Get('{/:userId}')
   public getPosts(@Param('userId') userId: string){
        return this.postsService.findAll(userId);
   }

   @Post()
   public createPost(@Body() createPostDto: CreatePostDto){
        console.log(createPostDto);
   }
}
