import { AlertService } from './../../services/alert.service';
import { PeopleService } from './../../services/people.service';
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

  name: string;
  lastName: string;
  age: number;

  peopleList: Person[];

  constructor(
    private alertService: AlertService,
    private peopleService: PeopleService
  ) {
    this.addPerson = false;
    this.addedPerson = false;
    this.addPersonStatus = '';

    this.peopleService.index.subscribe(
      (index: number) => this.alertService.showSwalMixinTop(this.peopleList[index].name + ', the index is: ' + index)
    );

    // enable button after 3 seconds
    setTimeout(() => {
      this.addPerson = true;
    }, 3000);

  }

  ngOnInit(): void {
    this.peopleList = this.peopleService.peopleList;
  }

  onAddPerson(): void {
    const person1 = new Person(this.name, this.lastName, this.age);
    this.peopleService.addPerson(person1);

    this.addedPerson = true;
    this.addPersonStatus = 'Added person';

    this.alertService.showSwalMixinTopEnd('Added person');
  }

  onModifyPerson(event: Event): void {
    this.titlePerson = (event.target as HTMLInputElement).value;
  }

}
