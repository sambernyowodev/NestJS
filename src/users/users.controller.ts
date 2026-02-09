import { Controller, Get, Post, Put, Patch, Delete, Param, Query, Body, Headers, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';

@Controller('users')
export class UsersController {

    constructor(
        // Injction UsersService
        private readonly usersService: UsersService
    ) {}


    @Get('{/:id}')
    public getUsers(
        @Param() getUsersParamDto: GetUsersParamDto, 
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number)
    {
        return this.usersService.findAll(getUsersParamDto, limit, page);
    }

    @Post()
    public createUser(@Body() createUserDto: CreateUserDto) 
    {
        console.log(createUserDto);
        return this.usersService.createUser(createUserDto);
    }

    @Patch()
    public patchUser(@Body() patchUserDto: PatchUserDto){
        return patchUserDto;
    }
}
