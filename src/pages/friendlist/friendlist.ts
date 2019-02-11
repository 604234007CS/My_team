import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Friend } from '../../model/modelfriend';
import { FriendrestProvider } from '../../providers/friendrest/friendrest';
import { FrienddetailPage } from '../frienddetail/frienddetail';

/**
 * Generated class for the FriendlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-friendlist',
  templateUrl: 'friendlist.html',
})
export class FriendlistPage {

  friends:Friend;
  major:string;


  constructor(private friendrest:FriendrestProvider ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendlistPage');
  }
  ionViewWillEnter(){
    this.major=this.navParams.get("major");
    this.friendrest.getFriendlist().subscribe(data=>{
      this.friends=data.filter(friend => friend.major === this.major);
    });
  

}
      goBack(){
      this.navCtrl.pop();
      }

      showDetail(studentID:number){
        this.navCtrl.push(FrienddetailPage,
          {studentID:studentID}
          );
      }

}
