import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TesteProvider } from '../../providers/teste-provider/teste-provider';

/*
  Generated class for the TesteCepPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/teste-cep/teste-cep.html',
})
export class TesteCepPage {
  constructor(private nav: NavController, private connectionService: TesteProvider) {}


  buscarCep() : void {
    this.connectionService.getCep('95600000')
      .then((resposta) => {
        console.log(resposta);

        let json = resposta.json();
        console.log(resposta.status);
        //this.cidadecep. = json.localidade;

      }).catch((error) => {
        console.log(error);
      })
  }

}
