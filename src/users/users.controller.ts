import { Controller, Get, Post, Put, Patch, Delete, Param, Query, Body, Headers, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersPramDto } from './dtos/get-users-pram.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UserService } from './providers/user.service';

@Controller('users')
export class UsersController {

    constructor(
        // Injction UserService
        private readonly userService: UserService
    ) {}


    @Get('{/:id}')
    public getUsers(
        @Param() GetUsersPramDto: GetUsersPramDto, 
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number | undefined,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number | undefined)
    {
        return this.userService.findAll(GetUsersPramDto, limit, page);
    }

    @Post()
    public createUser(@Body() createUserDto: CreateUserDto) 
    {
        console.log(createUserDto);
        return 'User created';
    }

    @Patch()
    public patchUser(@Body() patchUserDto: PatchUserDto){
        return patchUserDto;
    }
}
