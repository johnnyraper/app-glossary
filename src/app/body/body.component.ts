import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyComponent {
  @Input()
  public letter = '';
  public data = [];

  constructor(private firebaseService: FirebaseService) {
    this.firebaseService.initDatabase().on('value', (snapshot) => {
      this.data = snapshot.val();
    });
  }

}
