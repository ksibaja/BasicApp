import { EventEmitter, Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  peopleList: Person[] = [
    new Person('Kervin', 'Sibaja', 22),
    new Person('Aaron', 'Rojas', 18),
    new Person('Andrea', 'Arias', 30),
  ];

  index = new EventEmitter<number>();

  constructor() { }

  addPerson(person: Person): void {
    this.peopleList.push(person);
  }
}
