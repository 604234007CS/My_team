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

  Friends:Friend;
  major:string;

  constructor(private Friendrest:FriendRestProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendListPage');
  }

  ionViewWillEnter(){
    this.major=this.navParams.get("major");
    this.Friendrest.getFriendsList().subscribe(data=>{
        this.Friends=data.filter(Friend =>Friend.major === this.major)
    });
  }

  showDetail(studentID:number){
    this.navCtrl.push(FriendDetailPage,
      {studentID:studentID}
      );
  }
  goBack(){
    this.navCtrl.pop();
  }
}
