import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc';

  total: string = '';
  calculo: string[] = [];
  signo: string[] = [];
  num: Number = 0;
  sumaGlobal: Number = 0;
  conjuntoNumeros: string = '';
  variosNumeros: string[] = [];
  calcularTotal(btn: HTMLButtonElement) {
    if (this.num == 0) {
      this.total += btn.textContent;
    } else {
      this.num = 0;
      this.total = "";
      this.total += btn.textContent;
    }
  }
  operador(btn: HTMLButtonElement): void {
    if (this.comprobarRepeticionOperador()) {
      if (btn.textContent === "=") {
        this.num = 1;
        this.realizarOperacion();
      } else {
        this.total += btn.textContent;
      }
    }
    if (btn.textContent == "C") {
      this.reinicarVaribales();
      this.total = '';
    }
  }

  realizarOperacion(): void {
    this.obtenerSignosNumeros();
    for (let i = 1; i < this.variosNumeros.length; i++) {
      switch (this.signo[i - 1]) {
        case '+':
          this.sumaGlobal = Number(this.sumaGlobal) + Number(this.variosNumeros[i]);
          break;
        case '-':
          this.sumaGlobal = Number(this.sumaGlobal) - Number(this.variosNumeros[i]);
          break;
        case 'x':
          this.sumaGlobal = Number(this.sumaGlobal) * Number(this.variosNumeros[i]);
          break;
        case '/':
          this.sumaGlobal = Number(this.sumaGlobal) / Number(this.variosNumeros[i]);
          break;
      }
    }
    this.reinicarVaribales()
  }
  obtenerSignosNumeros() {
    for (let i = 0; i <= this.total.length; i++) {
      if (!isNaN(Number(this.total.charAt(i)))) {
        this.conjuntoNumeros += this.total.charAt(i);
      } else {
        this.variosNumeros.push(this.conjuntoNumeros);
        this.conjuntoNumeros = '';
        this.signo.push(this.total.charAt(i));
      }
    }
    this.variosNumeros.push(this.conjuntoNumeros);
    this.sumaGlobal = +Number(this.variosNumeros[0]);
  }
  comprobarRepeticionOperador(): boolean {
    let ultimoCaracter = this.total[this.total.length - 1];
    return !(ultimoCaracter == '+' || ultimoCaracter == '-' || ultimoCaracter == '/');
  }
  reinicarVaribales() {
    this.conjuntoNumeros = '';
    this.total = this.sumaGlobal.toString();
    this.sumaGlobal = 0;
    this.variosNumeros = [];
    this.signo = [];
  }
}
