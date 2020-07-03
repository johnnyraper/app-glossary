import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { getLocaleDayNames } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {

  initDatabase(): firebase.database.Reference {
    return firebase.database().ref();
  }

}
