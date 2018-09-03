import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {

  const config = {
    apiKey: 'AIzaSyCDP6QTqOyI60hilPwwRUQeRiW_KKzV-uY',
    authDomain: 'booksstore-d8c88.firebaseapp.com',
    databaseURL: 'https://booksstore-d8c88.firebaseio.com',
    projectId: 'booksstore-d8c88',
    storageBucket: 'booksstore-d8c88.appspot.com',
    messagingSenderId: '324229959883'
  };
  firebase.initializeApp(config);
  }
}
