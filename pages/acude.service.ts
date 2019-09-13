import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http/';


@Injectable()
export class AcudeService {

  constructor( public http : HttpClient) { }

  url : string = 'https://demo3276064.mockable.io/acudes';

  obterProdutos(){
      return this.http.get<Object[]>(this.url);
      

}

}