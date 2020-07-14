import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeeList();
  }

  updateEmployee(id: number) {
    this.router.navigate(['update', id]);
  }

  employeeDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployeeById(id)
    .subscribe(data => {
      console.log(data)
      this.reloadData();
    }, error => console.log(error));
  }

}
