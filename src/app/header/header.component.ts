import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'glossary';
  letters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

  @Output()
  public letterSelected: EventEmitter<string> = new EventEmitter<string>();


  @Output()
  public action: EventEmitter<string> = new EventEmitter<string>();

  public createEntry(event: any): void {
    this.action.emit('create');
  }

  public editEntry(event: any): void {
    this.action.emit('edit');
  }

  public deleteEntry(event: any): void {
    this.action.emit('delete');
  }

  // @todo: to delete - for test purposes
  public testEntry(event: any): void {
    this.action.emit(null);
  }

  public selectLetter(letter: string) {
    this.letterSelected.emit(letter);
  }
}
