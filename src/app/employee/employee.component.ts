import { Component } from '@angular/core';
import { ShowEmpComponent } from './show-emp/show-emp.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ShowEmpComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

}
