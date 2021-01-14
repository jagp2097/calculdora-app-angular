import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  @Output() resultadoEvent = new EventEmitter<number>();
  operandoA: number = 0;
  operandoB: number = 0;
  resultado: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onOperandoA(event: Event) {
    this.operandoA = parseFloat((<HTMLInputElement> event.target).value);
  }

  onOperandoB(event: Event) {
    this.operandoB = parseFloat((<HTMLInputElement> event.target).value);
  }

  onSumar() {
    this.resultado = this.operandoA + this.operandoB;
    this.resultadoEvent.emit(this.resultado);
  }

  onRestar() {
    this.resultado = this.operandoA - this.operandoB;
    this.resultadoEvent.emit(this.resultado);
  }

  onMultiplicar() {
    this.resultado = this.operandoA * this.operandoB;
    this.resultadoEvent.emit(this.resultado);
  }

  onDividir() {
    this.resultado = this.operandoA / this.operandoB;
    this.resultadoEvent.emit(this.resultado);
  }

}
