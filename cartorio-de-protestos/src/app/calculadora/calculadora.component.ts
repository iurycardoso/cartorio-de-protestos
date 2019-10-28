import { Component, OnInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})



export class CalculadoraComponent implements OnInit {

  public numero1: number;
	public numero2: number;
	public resultato: number;
	public resumo: any;

	adicao() {
		this.resultato = this.numero1 + this.numero2;
		this.resumo = this.numero1 + ' + ' + this.numero2;
	}

	subtracao() {
		// tslint:disable-next-line: indent
		this.resultato = this.numero1 - this.numero2;
		this.resumo = this.numero1 + ' - ' + this.numero2;
	}
	multiplicacao() {
		this.resultato = this.numero1 * this.numero2;
		this.resumo = this.numero1 + ' x ' + this.numero2;
	}
	divisao() {
			this.resultato = this.numero1 / this.numero2;
			this.resumo = this.numero1 + ' / ' + this.numero2;
		}

  constructor() { }

  ngOnInit() {
  }

  

}
