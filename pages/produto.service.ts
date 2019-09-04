import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http/';


@Injectable()
export class ProdutoService {

  constructor( public http : HttpClient) { }

  url : string = 'https://produtosapi.run.goorm.io/produtos';

  obterProdutos(){
      return this.http.get<Object[]>(this.url);
      

}

  cadastrarProduto(produto){

      this.http.post(
      this.url,produto
    )
  }
}