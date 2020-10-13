import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DadosService {

  readonly dados = [  // readonly a variável não pode ser alterada //
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27]
  ];

  constructor() { }

  /**
   * Retorna um observable contendo os dados a serem
   * exibidos no gráfico.
   * 
   * @return Observable<any>
   */

   obterDados(): Observable<any> {
     return new Observable(observable => {
      observable.next(this.dados);    // next faz o retorno dos dados //
      observable.complete();

     });
   }
}











