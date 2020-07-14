import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  
  employee: Employee;
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
     private employeeService: EmployeeService,
     private router: Router) { }

  ngOnInit(): void {
    this.employee = new Employee();
    this.activatedRoute.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id)
    .subscribe(data => {
      console.log(data)
      this.employee = data;
    }, error => console.log(error));
  }

  list() {
    this.router.navigate(['employees']);
  }

}
