import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  @Input() resultadoChild: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
