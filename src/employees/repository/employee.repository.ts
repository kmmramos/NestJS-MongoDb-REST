import { Injectable } from '@nestjs/common';
import { Employee, EmployeeDocument } from '../schemas/Employee.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmployeeCreateDto } from '../dto/EmployeeCreate.dto';

@Injectable()
export class EmployeeRepository {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
  ) {}

  async create(createEmployeeDTO: EmployeeCreateDto): Promise<Employee> {
    let newEmployee = new this.employeeModel(createEmployeeDTO);
    return await newEmployee.save();
  }

  async findAll(): Promise<Employee[]> {
    return await this.employeeModel.find();
  }
}
