import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/user.service';

@Injectable()
export class PostsService {
    constructor(
        /*
        * injection User Service
        */
       private readonly userService: UserService
    ){}
    public findAll(userId: string){
        const user = this.userService.findOneById(userId);
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
