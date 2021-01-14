import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  resultadoParent: number = 0;

  constructor() { }

  onResultado(resultado: number) {
    this.resultadoParent = resultado
  }

}
