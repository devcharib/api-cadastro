import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProdutoService } from '../produto.service';
import { DetalheComponent} from '../detalhe/detalhe.component';
import { HttpClient } from '@angular/common/http';
import { CadastroComponent } from '../cadastro/cadastro.component';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  acudes : Object[];

  constructor(public navCtrl: NavController, public http : HttpClient) {

      this.produtoService.obterProdutos()
      .subscribe( data => {
                          this.produtos = data;
                          console.log(this.produtos)
      },
      erro=> console.log(erro)
      );

      

  }
    cadastrar(){
        this.navCtrl.push(CadastroComponent);

}
}
