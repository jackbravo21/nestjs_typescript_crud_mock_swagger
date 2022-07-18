import { ApiProperty } from "@nestjs/swagger";


export class CourseDto{

    @ApiProperty({type: Number, description: "ID"})                                 //swagger description
    readonly id: number;
    @ApiProperty({type: String, description: "Title of the Course"})                //swagger description
    readonly title: string;
    @ApiProperty({type: String, description: "Description of the Course"})          //swagger description
    readonly description: string;

}