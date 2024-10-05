import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Course } from './course.schema';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}

  async createCourse(createCourseDto: CreateCourseDto): Promise<Course> {
    const newCourse = new this.courseModel(createCourseDto);
    return newCourse.save();
  }

  async findAll(
    page: number = 1,
    limit: number = 10,
    keyword: string = '',
    instructor: string = '',
  ): Promise<{
    courses: Course[];
    totalCount: number;
  }> {
    const courses = await this.courseModel
      .find({
        $or: [
          { title: { $regex: keyword, $options: 'i' } },
          { instructor: { $regex: keyword, $options: 'i' } },
        ],
      })
      .skip((page - 1) * limit)
      .limit(limit
      )
      .exec();

    const totalCount = await this.courseModel.countDocuments({
      $or: [
        { title: { $regex: keyword, $options: 'i' } },
        { instructor: { $regex: keyword, $options: 'i' } },
      ],
    }).exec();
      
    return {courses: courses, totalCount: totalCount};
  }

  async countCourses(): Promise<number> {
    return this.courseModel.countDocuments().exec();
  }

  async findOne(id: string): Promise<Course> {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error('Invalid Course ID');
    }
    return this.courseModel.findById(id).exec();
  }

  async searchByTitleOrTeacher(keyword: string): Promise<Course[]> {
    return this.courseModel
      .find({
        $or: [
          { title: { $regex: keyword, $options: 'i' } },
          { instructor: { $regex: keyword, $options: 'i' } },
        ],
      })
      .exec();
  }
}
