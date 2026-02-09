import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
    constructor(
        /*
        * injection User Service
        */
       private readonly usersService: UsersService
    ){}
    public findAll(userId: string){
        const user = this.usersService.findOneById(userId);
        return [
            {
                user: user,
                title: 'Test Title',
                content: 'Test Content'
            },
            {
                user: user,
                title: 'Test Title1',
                content: 'Test Content1'
            }
        ]
    }
}
