import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyProfilePage } from '../my-profile/my-profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private bannerList: Array<any> = [];
  private shopList: Array<any> = [];
  private promotionList: Array<any> = [];
  private segmentData: string = 'nearby';

  constructor(public navCtrl: NavController) {
    this.bannerList = [
      'https://s3-ap-southeast-1.amazonaws.com/static.wongnai.com/ads/2017/KBank_Everyday_Dining2017_640x160px.jpg',
      'https://s3-ap-southeast-1.amazonaws.com/static.wongnai.com/ads/2017/Banner-Wongnai-App-Ais-640x160pix.jpg',
      'https://s3-ap-southeast-1.amazonaws.com/static.wongnai.com/ads/2017/scb-640x160.jpg'
    ];

    this.shopList = [{
      name: 'เมมโม่ ค่าเฟ',
      image: 'https://static.eatigo.com/eatigo_8d25f627cd05149cf9f1151cba8b5dde_20170918193758_4321.jpg'
    }, {
      name: 'เอเทรี่ยม',
      image: 'https://static.eatigo.com/eatigo_AtriumTheLandmarkBangkok_20151102120709_5668.jpg'
    }, {
      name: 'ทะเลเผา',
      image: 'https://static.eatigo.com/eatigo_AtelierPullmanBangkokGrandeSukhumvit_20170905163013_2533.jpg'
    }, {
      name: 'เมมโม่ ค่าเฟ',
      image: 'https://static.eatigo.com/eatigo_8d25f627cd05149cf9f1151cba8b5dde_20170918193758_4321.jpg'
    }, {
      name: 'เมมโม่ ค่าเฟ',
      image: 'https://static.eatigo.com/eatigo_8d25f627cd05149cf9f1151cba8b5dde_20170918193758_4321.jpg'
    }, {
      name: 'เมมโม่ ค่าเฟ',
      image: 'https://static.eatigo.com/eatigo_8d25f627cd05149cf9f1151cba8b5dde_20170918193758_4321.jpg'
    }, {
      name: 'เมมโม่ ค่าเฟ',
      image: 'https://static.eatigo.com/eatigo_8d25f627cd05149cf9f1151cba8b5dde_20170918193758_4321.jpg'
    }];

    this.promotionList = [{
      name: 'แลกของพรีเมี่ยม',
      image: 'https://static.eatigo.com/eatigo_32a016613e63d14669bf575ea00dfc2f_20170921142217_8494.jpg'
    }, {
      name: 'ลุ้นเที่ยวฟรี',
      image: 'https://static.eatigo.com/eatigo_873ff60d59c2b35f611f6dcd82cd2b3a_20150611170304_9957.jpg'
    }, {
      name: 'สินค้าใหม่',
      image: 'https://static.eatigo.com/eatigo_1e4423fbab0cd3b5c873857fb4b3db55_20170831160249_1990.jpg'
    },{
      name: 'แลกของพรีเมี่ยม',
      image: 'https://static.eatigo.com/eatigo_32a016613e63d14669bf575ea00dfc2f_20170921142217_8494.jpg'
    }, {
      name: 'ลุ้นเที่ยวฟรี',
      image: 'https://static.eatigo.com/eatigo_873ff60d59c2b35f611f6dcd82cd2b3a_20150611170304_9957.jpg'
    }, {
      name: 'สินค้าใหม่',
      image: 'https://static.eatigo.com/eatigo_1e4423fbab0cd3b5c873857fb4b3db55_20170831160249_1990.jpg'
    }]

  }

  gotoProfilePage(){
    this.navCtrl.push(MyProfilePage);
  }

}
