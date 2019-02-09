import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Friend } from '../../models/model';
import { FriendRestProvider } from '../../providers/friendrest/friendrest';

/**
 * Generated class for the FriendDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-friend-detail',
  templateUrl: 'friend-detail.html',
})
export class FriendDetailPage {

  studentID:number;
  friend:Friend;

  constructor(public Friendrest:FriendRestProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewillEnter(){
    this.studentID=this.navParams.get("studentID");
    this.Friendrest.getFriendsList().subscribe(data=>{
      this.friend=data.filter(friend => friend.studentID === this.studentID)[0];
    });
  }

  ionViewDidLoad() {
    this.studentID=this.navParams.get("studentID");
    console.log(this.studentID);
  }
  
  goBack(){
    this.navCtrl.pop();
  }
}
