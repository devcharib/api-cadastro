import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  acudes;
  constructor(public navCtrl: NavController, public navParams : NavParams) { 
      this.acudes = this.navParams.get('acudes');
  }

  ngOnInit() {
  }


}