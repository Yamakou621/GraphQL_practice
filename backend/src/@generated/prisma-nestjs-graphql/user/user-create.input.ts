import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { PostCreateNestedManyWithoutAuthorInput } from '../post/post-create-nested-many-without-author.input';

@InputType()
export class UserCreateInput {
  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  @Validator.IsNotEmpty()
  name!: string;

  @Field(() => String, { nullable: false })
  @Validator.MinLength(8)
  password!: string;

  @HideField()
  hashedRefreshToken?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;

  @Field(() => PostCreateNestedManyWithoutAuthorInput, { nullable: true })
  posts?: PostCreateNestedManyWithoutAuthorInput;
}
