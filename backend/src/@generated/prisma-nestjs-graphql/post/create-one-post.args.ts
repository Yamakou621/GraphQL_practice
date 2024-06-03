import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostCreateInput } from './post-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOnePostArgs {
  @Field(() => PostCreateInput, { nullable: false })
  @Type(() => PostCreateInput)
  @ValidateNested()
  @Type(() => PostCreateInput)
  data!: PostCreateInput;
}
