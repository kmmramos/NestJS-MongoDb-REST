/* eslint-disable prettier/prettier */
import { IsNotEmpty, NotEquals} from 'class-validator';
import { EmployeeStatus, EmployeeTier } from '../Employee.enum';

export class EmployeeCreateDto {
  id: string;
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  @NotEquals('CEO')
  designation: string;
  nearestCity: string;
  tier: EmployeeTier;
  status: EmployeeStatus;
}
