import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  employee: Employee;
  id: number;
  submitted = false;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employee = new Employee();

    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id)
    .subscribe(data => {
      console.log(data)
      this.employee = data;
    }, error => console.log(error));

  }

  updateEmployee() {
    this.employeeService.updateEmployeeById(this.id, this.employee)
    .subscribe(data => console.log(data, error => console.log(error)));

    this.employee = new Employee();
    this.goToList();
  }

  goToList() {
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    this.submitted = true;
    this.updateEmployee();
  }

}
