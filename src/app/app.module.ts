import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
    apiKey: 'AIzaSyDy7Yfear-R1QLvHGQkCPPQaaIxJNEqnNc',
    authDomain: 'chatapp-680ac.firebaseapp.com',
    databaseURL: 'https://chatapp-680ac.firebaseio.com',
    projectId: 'chatapp-680ac',
    storageBucket: '',
    messagingSenderId: '228709951200'
};

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
