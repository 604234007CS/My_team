import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Friend } from '../../models/model';


@Injectable()
export class FriendRestProvider {

  private url:string="https://raw.githubusercontent.com/604234007CS/My_team/master/student.json";

  constructor(public http: HttpClient) {
    console.log('Hello FriendRestProvider Provider');
  }

  getFriendsList():Observable<any>{
    return this.http.get<Friend>(this.url)

  }

}