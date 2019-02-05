import { FriendDetailPage } from './../friend-detail/friend-detail';
import { Friend } from './../../models/model';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FriendRestProvider } from '../../providers/friendrest/friendrest';


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
    this.Friendrest.getFriendsList().subscribe(data=>{
        this.Friend=data.filter(Friend =>Friend.category === this.category)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendListPage');
  }


  showDetail(studentId:number){
    this.navCtrl.push(FriendDetailPage,
      {studentId:studentId}
      );
  }
  goBack(){
    this.navCtrl.pop();
  }
}
