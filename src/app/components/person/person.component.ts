import { PeopleService } from './../../services/people.service';
import { Person } from './../../models/person.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() index: number;
  @Input() person: Person;

  name: string;
  lastName: string;
  private age: number;

  constructor(
    private peopleService: PeopleService
  ) {
    this.name = 'Kervin';
    this.lastName = 'Sibaja';
    this.age = 22;
  }

  ngOnInit(): void {
  }

  emitGreet(): any {
    this.peopleService.index.emit(this.index);
  }

  // return age
  getAge(): number {
    return this.age;
  }

}
