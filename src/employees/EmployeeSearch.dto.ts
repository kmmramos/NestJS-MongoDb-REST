/* eslint-disable prettier/prettier */
import { IsIn } from 'class-validator';
import { EmployeeStatus } from './Employee.enum';

export class EmployeeSearchDto {
  @IsIn(Object.values(EmployeeStatus))
  status: EmployeeStatus;
  name: string;
}
