import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  name: string;
  lastName: string;
  private age: number;

  constructor() {
    this.name = 'Kervin';
    this.lastName = 'Sibaja';
    this.age = 22;
  }

  ngOnInit(): void {
  }

  // return age
  getAge(): number {
    return this.age;
  }

}
