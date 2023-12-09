import { Component, OnInit } from '@angular/core';
import { Author, authors } from '../authors.model';

@Component({
  selector: 'app-author-list',
  template: `
    <app-author-detail
      *ngFor="let author of authors"
      [author]="author"
      (onDelete)="handleDelete($event)"
      (onSelected)="handleSelected($event)"
    >
    </app-author-detail>
    <br />
    <div>
      Selected:{{ currentSelected.firstName }} - {{ currentSelected.lastName }}
    </div>
  `,
})
export class AuthorListComponent implements OnInit {
  authors: Author[] = authors;
  currentSelected = authors[0];

  ngOnInit() {}
  handleDelete(deleteAuthor: Author) {
    this.authors = this.authors.filter((item) => item.id !== deleteAuthor.id);
  }
  handleSelected(selectedAuthor: Author) {
    this.currentSelected = selectedAuthor;
  }
}
