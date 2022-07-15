import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  a: any;
  b: any;
  result: any;

  sum(a: number, b: number) {
    this.result = a + b;
  }

  sub(a: number, b: number) {
    this.result = a - b;
  }

  mul(a: number, b: number) {
    this.result = a * b;
  }

  dev(a: number, b: number) {
    if (b == 0) {
      this.result = 'Mẫu số bằng 0 rồi bạn êi';
    } else {
      this.result = a / b;
    }

  }

  constructor() {
  }

  ngOnInit(): void {
  }

  background = "brown";

  changeColor(background: any) {
    this.background = background;
  }

}
