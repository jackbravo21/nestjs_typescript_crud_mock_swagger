import { ApiProperty } from "@nestjs/swagger";

export class UserDto
{
    @ApiProperty({type: Number, description: "ID"})
    readonly id: number;
    @ApiProperty({type: String, description: "Name of the User"})
    readonly name: string;
    @ApiProperty({type: Number, description: "Age of the"})
    readonly age: number;
    @ApiProperty({type: String, description: "Sector of the User"})
    readonly sector: string;
}