import { Controller, Get, Post, Put, Patch, Delete, Param, Query, Body, Headers, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersPramDto } from './dtos/get-users-pram.dto';
import { PatchUserDto } from './dtos/patch-user.dto';

@Controller('users')
export class UsersController {
    @Get('{/:id}')
    public getUsers(
        @Param() GetUsersPramDto: GetUsersPramDto, 
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number | undefined,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number | undefined)
  {
        console.log(GetUsersPramDto);
        console.log(limit);
        console.log(page);
        return ['User1', 'User2', 'User3'];
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
