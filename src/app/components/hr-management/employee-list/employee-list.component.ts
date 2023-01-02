import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employeeList = [
    {
      idEmployee: '1',
      name: 'Bento Luiz',
      fte: 'Employee',
      skill: 'Front-end Developer'
    },
    {
      idEmployee: '2',
      name: 'Hertz Viana',
      fte: 'Affiliated',
      skill: 'Back-end Developer'
    },
    {
      idEmployee: '3',
      name: 'Ariel Hertz',
      fte: 'Employee',
      skill: 'UI Designer'
    }
  ]

}
