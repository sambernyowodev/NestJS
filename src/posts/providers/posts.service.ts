import { CreatePostDto } from '../dtos/create-post.dto';
import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../../users/providers/users.service';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {
  constructor(
    /*
     * Injecting Users Service
     */
    private readonly usersService: UsersService,

    /**
     * Injecting postsRepository
     */
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
  ) {}

  /**
   * Method to create a new post
   */
  public async create(@Body() createPostDto: CreatePostDto) {
    let author = await this.usersService.findOneById(createPostDto.authorId);

    if (!author) {
      throw new NotFoundException('Author tidak ditemukan!');
    }

    // Create the post
    let post = this.postsRepository.create({
      ...createPostDto,
      author: author,
    });

    return await this.postsRepository.save(post);
  }

  public async findAll(userId: number) {

    let posts = await this.postsRepository.find();

    return posts;
  }

  public async delete(id: number) {
    await this.postsRepository.delete(id);

    return { deleted: true, id };
  }
}