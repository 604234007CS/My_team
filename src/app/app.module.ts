import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FriendListPage } from '../pages/friend-list/friend-list';
import { FriendDetailPage } from '../pages/friend-detail/friend-detail';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule } from '@angular/common/http';
import { FriendRestProvider } from '../providers/friendrest/friendrest';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FriendListPage,
    FriendDetailPage
  ],
  imports: [
    HttpClientJsonpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FriendListPage,
    FriendDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    FriendRestProvider
  ]
})
export class AppModule {}
