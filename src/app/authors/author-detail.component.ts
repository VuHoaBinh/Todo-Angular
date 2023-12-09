import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Author } from '../authors.model';

@Component({
  selector: 'app-author-detail',
  template: `
    <div *ngIf="author; else noAuthor">
      <strong>{{ author.firstName }} {{ author.lastName }}</strong>
    </div>
    <ng-template #noAuthor>
      <div>
        <em>No author available</em>
      </div>
    </ng-template>
    <button (click)="handleDelete()">X</button>
    <button (click)="handleSelected()">Selection</button>
  `,
})
export class AuthorDetailComponent {
  @Input() author: Author = {} as Author;
  @Output() onDelete = new EventEmitter<Author>();
  @Output() onSelected = new EventEmitter<Author>();

  handleDelete() {
    this.onDelete.emit(this.author);
    console.log(this.onDelete.emit(this.author));
  }
  handleSelected() {
    this.onSelected.emit(this.author);
  }
}
