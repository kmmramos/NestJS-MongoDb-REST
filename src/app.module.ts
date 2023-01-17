import { Module } from '@nestjs/common';
import { EmployeesModule } from './employees/employees.module';
import { EmployeesService } from './employees/employees.service';

@Module({
  imports: [EmployeesModule],
  providers: [EmployeesService],
})
export class AppModule {}
