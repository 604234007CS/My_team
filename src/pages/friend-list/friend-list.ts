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

  friends:Friend;
  major:string;

  constructor(private friendrest:FriendRestProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendlistPage');
  }

  ionViewWillEnter(){
    this.major=this.navParams.get("major");
    this.friendrest.getFriendsList().subscribe(data=>{
        this.friends=data.filter(friend =>friend.major === this.major)
    });
  }
  goBack(){
    this.navCtrl.pop();
  }
  showDetail(studentID:number){
    this.navCtrl.push(FriendDetailPage,
      {studentID:studentID}
      );
  }
  
}
