import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from '../@generated/prisma-nestjs-graphql/user/user.model';
import { FindFirstUserArgs } from '../@generated/prisma-nestjs-graphql/user/find-first-user.args';
import { CreateOneUserArgs } from '../@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { FindUniqueUserArgs } from '../@generated/prisma-nestjs-graphql/user/find-unique-user.args';
import { UpdateOneUserArgs } from '../@generated/prisma-nestjs-graphql/user/update-one-user.args';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  //user検索
  async findFirst(args: FindFirstUserArgs): Promise<User | null> {
    return this.prisma.user.findFirst(args);
  }

  //user検索id,email
  async findUnique(args: FindUniqueUserArgs): Promise<User | null> {
    return this.prisma.user.findUnique(args);
  }

  //user作成
  async createUser(args: CreateOneUserArgs): Promise<User> {
    return this.prisma.user.create(args);
  }

  async update(args: UpdateOneUserArgs): Promise<User> {
    return this.prisma.user.update(args);
  }
}
