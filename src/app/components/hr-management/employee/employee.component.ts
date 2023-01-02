import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  //A propriedade employee vai receber os valores do componente pai
  //(employee-list)
  @Input() employee = {
    idEmployee: '',
    name: '',
    fte: '',
    skill: ''
  }
}
