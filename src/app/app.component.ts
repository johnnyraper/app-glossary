
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public title = 'glossary';
  public data: any[] = [];
  public letter = '';

  constructor(private firebaseService: FirebaseService) {
    this.firebaseService.initDatabase().on('value', (snapshot) => {
      this.data = snapshot.val();
    });
  }

  public filterGlossary(letter: string): void {
    this.letter = letter;
  }

  public createEntry(event: any): void {
    this.firebaseService.writeDatabase('test ', 'testformegan');
  }

}
