
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      state('open', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('close', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('close => open', animate('400ms ease-in-out')),
      transition('open => close', animate('400ms ease-in-out')),
    ])],
})
export class AppComponent {
  public title = 'glossary';
  public letter = '';
  public action = null;
  public modalState = 'close';

  constructor(private firebaseService: FirebaseService) {}

  public createEntry(event: any): void {
    this.firebaseService.writeDatabase('test ', 'testformegan');
  }

  public filterGlossary(letter: string): void {
    this.letter = letter;
  }

  public handleAction(event) {
    this.action = event;
    this.modalState = event ? 'open' : 'close';
  }
}
