import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  sumResult: number;
  operandA: number;
  operandB: number;

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    this.sumResult = this.operandA + this.operandB;
  }

}
