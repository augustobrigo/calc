import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc';

  
    valor: string = "";
  operacion: string = "";
  cal: boolean=false;
borrar() {
this.valor = "";
}
operar(num: String) {
  if(this.cal == false){
    if(num == "+" || num == "-" || num == "*" || num == "/"){
      this.operacion += this.valor;
      this.operacion += num;
      this.valor = "";
    }else{
      if(num === "pd"){
        this.valor += "(";
      }else if(num === "pi"){
        this.valor += ")";
      }else{
        this.valor += num;
      }
    }
  }else{
    this.valor = num.toString();
    this.cal = false;
  }

}
calcular() {
  if(this.valor.length > 0){
    try{
      this.operacion += this.valor;
      let resultado = eval(this.operacion);
      this.operacion= "";
      this.valor = resultado.toString();
      this.cal = true;
    }catch(error){
      alert("Hubo un error al hacer la operacion");
      this.valor = "";
      this.operacion = "";
    }
  }
}

}
