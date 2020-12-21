import { Person } from './../../models/person.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  addPerson: boolean;
  addedPerson: boolean;
  addPersonStatus: string;
  titlePerson = 'Computer Engineer';

  peopleList: Person[] = [
    new Person('Kervin', 'Sibaja', 22),
    new Person('Aaron', 'Rojas', 18),
    new Person('Andrea', 'Arias', 30),
  ];
  name: string;
  lastName: string;
  age: number;

  constructor() {
    this.addPerson = false;
    this.addedPerson = false;
    this.addPersonStatus = '';

    // enable button after 3 seconds
    setTimeout(() => {
      this.addPerson = true;
    }, 3000);

  }

  ngOnInit(): void {
  }

  onAddPerson(): void {
    const person1 = new Person(this.name, this.lastName, this.age);
    this.peopleList.push(person1);

    this.addedPerson = true;
    this.addPersonStatus = 'Added person';
  }

  onModifyPerson(event: Event): void {
    this.titlePerson = (event.target as HTMLInputElement).value;
  }

}
