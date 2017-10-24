import { Component, ViewChild } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Tabs } from 'ionic-angular';
import { CategoryPage } from '../category/category';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = CategoryPage;
  tab4Root = ContactPage;
  tab5Root = ContactPage;

  constructor() {

  }

  centerTab(){
    this.tabRef.select(2);
  }
}
