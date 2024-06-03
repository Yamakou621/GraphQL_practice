import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { PostUncheckedCreateNestedManyWithoutAuthorInput } from '../post/post-unchecked-create-nested-many-without-author.input';

@InputType()
export class UserUncheckedCreateInput {
  @Field(() => Int, { nullable: true })
  id?: number;

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

  @Field(() => PostUncheckedCreateNestedManyWithoutAuthorInput, {
    nullable: true,
  })
  posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;
}
