import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeRepository } from './repository/employee.repository';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './service/employees.service';
import { Employee, EmployeeSchema } from './schemas/Employee.schema';
import { VehicleService } from './service/vehicle.service';
import { VehicleRepository } from './repository/vehicle.repository';
import { Vehicle, VehicleSchema } from './schemas/Vehicle.schema';
import { VehicleController } from './vehicle.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
      { name: Vehicle.name, schema: VehicleSchema },
    ]),
  ],
  controllers: [EmployeesController, VehicleController],
  providers: [
    EmployeesService,
    EmployeeRepository,
    VehicleService,
    VehicleRepository,
  ],
})
export class EmployeesModule {}
