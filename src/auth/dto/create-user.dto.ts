import { IsString } from "class-validator"

export class CreateUserDto {
    
    @IsString()
    name: string
    
    @IsString()
    lastname: string;
    
    @IsString()
    age: string;
    
    @IsString()
    gender: string;
    
    @IsString()
    status: string;
    
    @IsString()
    birthdate: string;
    
    @IsString()
    phone: string;

}
