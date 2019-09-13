import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AcudeService } from './pages/acude.service';
import { DetalheComponent} from '../detalhe/detalhe.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  acudes : Object[];

  constructor(public navCtrl: NavController, public http : HttpClient, public navParams : NavParams, public acudeService : AcudeService) {

      this.acudeService.obterProdutos()
      .subscribe( data => {
                          this.acudes = data;
                          console.log(this.acudes)
      },
      erro=> console.log(erro)
      );

      

  }
    seleciona( x ){
    console.log(x);
    this.navCtrl.push(DetalheComponent, {acudes : x});
  }
}
