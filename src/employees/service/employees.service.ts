import { Injectable, NotFoundException } from '@nestjs/common';
import { EmployeeStatus, EmployeeTier } from '../Employee.enum';
import { v1 as uuid } from 'uuid';
import { EmployeeSearchDto } from '../EmployeeSearch.dto';
import { EmployeeUpdateDto } from '../EmployeeUpdate.dto';
import { EmployeeCreateDto } from '../dto/EmployeeCreate.dto';
import { Employee } from '../schemas/Employee.schema';
import { EmployeeRepository } from '../repository/employee.repository';

@Injectable()
export class EmployeesService {
  constructor(private employeeRepository: EmployeeRepository){}

  async getAllEmployees(): Promise<Employee[]> {
    return await this.employeeRepository.findAll();
  }

  async createEmployee(employeeCreateDto: EmployeeCreateDto): Promise<Employee> {
    // const { firstName, lastName, designation, nearestCity, tier } =
    //   employeeCreateDto;
    return await this.employeeRepository.create(employeeCreateDto);
  }

  /*employeeSearch(employeeSearchDto: EmployeeSearchDto) {
    const { status, name } = employeeSearchDto;
    let employees = this.getAllEmployees();
    if (status) {
      employees = employees.filter((employee) => employee.status === status);
    }
    if (name) {
      employees = employees.filter(
        (employee) =>
          employee.firstName.includes(name) || employee.lastName.includes(name),
      );
    }
    return employees;
  }*/

  /*getEmployeeById(id: string): Employee {
    const employees = this.getAllEmployees();
    let employee = this.employees.find((employee) => employee.id === id);
    if (!employee) {
      throw new NotFoundException(`${id} does not exists.`);
    }
    return employee;
  }*/

  /* updateEmployee(employeeUpdateDto: EmployeeUpdateDto): Employee {
    const { id, city } = employeeUpdateDto;
    const employee = this.getEmployeeById(id);
    employee.nearestCity = city;
    return employee;
  } */

  /* deleteEmployee(id: string) {
    const employees = this.getAllEmployees();
    this.employees = employees.filter((employee) => employee.id != id);
    return employees.length != this.employees.length;
  } */
}
