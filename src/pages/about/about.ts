import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private promotionList: Array<any> = [];

  constructor(public navCtrl: NavController) {
    this.promotionList = [
      './assets/image/promotion_essy.jpg',
      './assets/image/promotion_essy.jpg',
      './assets/image/promotion_essy.jpg',
      './assets/image/promotion_essy.jpg',
      './assets/image/promotion_essy.jpg'
    ];
  }

}
