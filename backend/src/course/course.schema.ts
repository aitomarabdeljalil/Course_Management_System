import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Course extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  instructor: string;

  @Prop({ required: true })
  schedule: string;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
