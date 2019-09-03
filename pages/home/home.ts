import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpClient  } from '@angular/common/http/';
import { CadastroComponent } from '../cadastro/cadastro.component';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  produtos : Object[];

  constructor(public navCtrl: NavController, public http : HttpClient) {

      this.http.get<Object[]>('https://produtosapi.run.goorm.io/produtos')
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
