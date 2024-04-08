import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateUserDto {
    
    @IsString()
    name: string
    
    @IsString()
    lastname: string;
    
    @IsString()
    age: string;
    
    @IsString()
    gender: string;
    
    @IsBoolean()
    status: boolean;
    
    @IsString()
    @IsOptional()
    birthdate: string;
    
    @IsNumber()
    phone: number;

}
