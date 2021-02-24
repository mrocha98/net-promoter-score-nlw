import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { validate } from 'class-validator'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = new User()
    Object.assign(newUser, createUserDto)

    await validate(newUser)

    return this.usersRepository.save(newUser)
  }

  findAll() {
    return `This action returns all users`
  }

  findOne(id: string) {
    return `This action returns a #${id} user`
  }

  async findByEmail(email: string) {
    return this.usersRepository.find({ where: { email } })
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: string) {
    return `This action removes a #${id} user`
  }
}
