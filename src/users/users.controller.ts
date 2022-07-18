import { Body, Controller, Get, Post, Param, Delete, Query, Put } from "@nestjs/common";
import { ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';
import {UsersService} from "./users.service";
import { UserDto } from "./dto/user.dto";

@Controller("users")

export class UsersController
{
    constructor (private usersService: UsersService){}

    @Get()
    @ApiOkResponse({description: "List of Courses"})            //swagger
    async getUsers()
    {
        const users = await this.usersService.getUsers();
        return users;
    }

    @Get(":userId")
    @ApiOkResponse({description: "List of All Users"})         //swagger
    async getUser(@Param("userId")userId)
    {
        const user = await this.usersService.getUser(userId);
        return user;
    }

    @Post()
    @ApiCreatedResponse({description: "Added a Course"})       //swagger
    async addUser(@Body() UserDto: UserDto)
    {
        const user = await this.usersService.addUser(UserDto);
        return user;
    }

    @Put()
    async editUser(@Body() UserDto: UserDto)
    {
        const user = await this.usersService.editUser(UserDto);
        return user;
    }

    @Delete()
    @ApiOkResponse({description: "Remove a User"})            //swagger
    async deleteUser(@Query() query)
    {
        const user = await this.usersService.deleteUser(query.id);
        return user;
    }

    //localhost:3000/users/2

}