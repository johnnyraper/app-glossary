import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase';

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAuYoCAXlLuJ9NuiEzl0wMyj-74eHQRgQY',
  authDomain: 'hack-glossary.firebaseapp.com',
  databaseURL: 'https://hack-glossary.firebaseio.com',
  projectId: 'hack-glossary',
  storageBucket: 'hack-glossary.appspot.com',
  messagingSenderId: '1032031309058',
  appId: '1:1032031309058:web:aff13c928e21970b8d061b'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const testRef = firebase.database().ref();
testRef.once('value').then((snapshot) => {
  console.log('value ', snapshot.val());
});

console.log('database ', database);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
