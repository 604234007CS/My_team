import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FriendListPage } from '../friend-list/friend-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  showBookList(categoryName:string){
    this.navCtrl.push(FriendListPage,
      {category:categoryName}
      );
  }
}
