import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  sumResult: number;
  num1: number;
  num2: number;

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    this.sumResult = this.num1 + this.num2;
  }

}
