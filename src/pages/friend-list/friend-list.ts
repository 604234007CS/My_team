import { FriendDetailPage } from './../friend-detail/friend-detail';
import { Friend } from './../../models/model';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FriendRestProvider } from '../../providers/friendrest/friendrest';

/**
 * Generated class for the FriendListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-friend-list',
  templateUrl: 'friend-list.html',
})
export class FriendListPage {

  Friend:Friend;
  category:string;

  constructor(private Friendrest:FriendRestProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.category=this.navParams.get("category");
    this.Friendrest.getFriendlist().subscribe(data=>{
        this.Friend=data.filter(Friend =>Friend.category === this.category)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendListPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

  showDetail(bookid:number){
    this.navCtrl.push(FriendDetailPage,
      {studentid:studentid}
      );
  }
}
