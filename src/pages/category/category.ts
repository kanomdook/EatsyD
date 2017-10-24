import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  private categoryList: Array<any> = [];
  private shopList: Array<any> = [];
  private segmentData: string = 'nearby';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.categoryList = [{
      title: 'Food',
      image: 'https://image.flaticon.com/icons/svg/135/135622.svg'
    }, {
      title: 'Dessert',
      image: 'https://image.flaticon.com/icons/svg/135/135556.svg'
    }, {
      title: 'Coffee',
      image: 'https://image.flaticon.com/icons/svg/579/579125.svg'
    }, {
      title: 'Steak',
      image: 'https://image.flaticon.com/icons/svg/189/189147.svg'
    }, {
      title: 'Food',
      image: 'https://image.flaticon.com/icons/svg/135/135622.svg'
    }, {
      title: 'Dessert',
      image: 'https://image.flaticon.com/icons/svg/135/135556.svg'
    }, {
      title: 'Coffee',
      image: 'https://image.flaticon.com/icons/svg/579/579125.svg'
    }, {
      title: 'Steak',
      image: 'https://image.flaticon.com/icons/svg/189/189147.svg'
    }];

    this.shopList = [{
      name: 'เมมโม่ ค่าเฟ',
      type: 'coffee / bekery',
      image: 'https://static.eatigo.com/eatigo_8d25f627cd05149cf9f1151cba8b5dde_20170918193758_4321.jpg'
    }, {
      name: 'เอเทรี่ยม',
      type: 'food',
      image: 'https://static.eatigo.com/eatigo_AtriumTheLandmarkBangkok_20151102120709_5668.jpg'
    }, {
      name: 'ทะเลเผา',
      type: 'food',
      image: 'https://static.eatigo.com/eatigo_AtelierPullmanBangkokGrandeSukhumvit_20170905163013_2533.jpg'
    }, {
      name: 'เมมโม่ ค่าเฟ',
      type: 'coffee / bekery',
      image: 'https://static.eatigo.com/eatigo_8d25f627cd05149cf9f1151cba8b5dde_20170918193758_4321.jpg'
    }, {
      name: 'เมมโม่ ค่าเฟ',
      type: 'coffee / bekery',
      image: 'https://static.eatigo.com/eatigo_8d25f627cd05149cf9f1151cba8b5dde_20170918193758_4321.jpg'
    }, {
      name: 'เมมโม่ ค่าเฟ',
      type: 'coffee / bekery',
      image: 'https://static.eatigo.com/eatigo_8d25f627cd05149cf9f1151cba8b5dde_20170918193758_4321.jpg'
    }, {
      name: 'เมมโม่ ค่าเฟ',
      type: 'coffee / bekery',
      image: 'https://static.eatigo.com/eatigo_8d25f627cd05149cf9f1151cba8b5dde_20170918193758_4321.jpg'
    }];
  }

}
