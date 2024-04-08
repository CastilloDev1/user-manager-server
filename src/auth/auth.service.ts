import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { LoginDto } from './dto/login.dto';
import { LoginResponse } from './interfaces/login-response';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel( User.name ) private userModel: Model<User>
  ){}

  async login(loginDto: LoginDto) {
    const { name, lastname, phone } = loginDto;
    const user = await this.userModel.findOne({ name, lastname, phone });
    if (!user)
      throw new UnauthorizedException('Not valid credentials');

    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const newUser = new this.userModel( createUserDto );
      return await newUser.save();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
