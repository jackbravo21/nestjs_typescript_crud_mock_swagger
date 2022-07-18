import { Body, Controller, Get, Post, Param, Delete, Query, Put } from '@nestjs/common';
import { ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { CoursesService } from './courses.service';
import { CourseDto } from './dto/course.dto';

@Controller('courses')
export class CoursesController {

    constructor (private coursesService: CoursesService)
    {}

    @Get()
    @ApiOkResponse({description: "List of one Courses"})                    //swagger
    async getCourses()
    {
        const courses = await this.coursesService.getCourses();
        return courses;
    }

    //localhost:3000/courses/2
    
    @Get(":courseId")
    @ApiOkResponse({description: "List of All Courses"})                    //swagger
    async getCourse(@Param("courseId")courseId)
    {
        const course = await this.coursesService.getCourse(courseId);
        return course;
    }

    @Post()
    @ApiCreatedResponse({description: "Added a Course"})                    //swagger
    async addCourse(@Body() CourseDto: CourseDto)
    {
        const course = await this.coursesService.addCourse(CourseDto);
        return course;
    }

    @Put()
    async editUser(@Body() CourseDto: CourseDto)
    {
        const course = await this.coursesService.editCourse(CourseDto);
        return course;
    }

    @Delete()
    @ApiOkResponse({description: "Remove a Course"})                        //swagger
    async deleteCourse(@Query() query)
    {
        const course = await this.coursesService.deleteCourse(query.id);
        return course;
    }

//chamo no service essas funcoes getCourse, addCourse, deleteCourse;

//localhost:3000/courses/2
//localhost:3000/courses/courses?courseId=2&name=teste

}
