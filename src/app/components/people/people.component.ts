import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  addPerson: boolean;
  addPersonStatus: string;
  titlePerson = 'Computer Engineer';

  constructor() {
    this.addPerson = false;
    this.addPersonStatus = 'No person has been added';

    // enable button after 3 seconds
    setTimeout(() => {
      this.addPerson = true;
    }, 3000);

  }

  ngOnInit(): void {
  }

  onAddPerson(): void {
    this.addPersonStatus = 'Added person';
  }

  onModifyPerson(event: Event): void {
    this.titlePerson = (event.target as HTMLInputElement).value;
  }

}
