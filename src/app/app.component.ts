
import { Component } from '@angular/core';
import { MockData } from './mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'glossary';
  public data: any[] = MockData;
  public letter = '';

/**
const count = 0;

data.forEach(d => {
  count += 1;
}); */

  public filterGlossary(letter: string): void {
    this.letter = letter;
  }

  public createEntry(event: any): void {
    console.log('create entry', event);
  }

}
