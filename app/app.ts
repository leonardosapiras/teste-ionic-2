import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {TesteCepPage} from './pages/teste-cep/teste-cep';
import {TesteProvider} from './providers/teste-provider/teste-provider';


@Component({
  //template: '<ion-nav [root]="rootPage"></ion-nav>'
  templateUrl: 'build/app.html'
})
export class MyApp {

  pages: Array<{component: any, title: string, icon: string}>;

  rootPage: any = HomePage;

  constructor(platform: Platform) {

    this.pages = [
      {component: HomePage, title: "Home", icon: 'home'},
      {component: TesteCepPage, title: "Cep", icon: 'home'}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page: any) : void {
    this.rootPage = page.component;
  }
}

ionicBootstrap(MyApp, [TesteProvider]);
