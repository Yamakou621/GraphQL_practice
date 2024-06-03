import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Post } from '../post/post.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id!: number;

  /**
   * @Validator.@IsEmail()
   */
  @Field(() => String, {
    nullable: false,
    description: '@Validator.@IsEmail()',
  })
  email!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @HideField()
  password!: string;

  @HideField()
  hashedRefreshToken!: string | null;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @HideField()
  updatedAt!: Date;

  @Field(() => [Post], { nullable: true })
  posts?: Array<Post>;

  @Field(() => UserCount, { nullable: false })
  _count?: UserCount;
}
