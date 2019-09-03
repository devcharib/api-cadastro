import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http/';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome : string;
  preco : string;
  qtd : string;

  constructor(public http : HttpClient)  { }

  ngOnInit() {
  }

  cadastrar() {
    this.http.post(
      'https://produtosapi.run.goorm.io/produtos',{nome : this.nome,
      preco : this.preco,
      qtd : this.qtd}
    )
    .subscribe( data=> console.log(data),
      erro=> console.log(erro));
    
  }
}