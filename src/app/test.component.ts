import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <h2>Hello there!</h2>
    <h3>Your name: {{ user.name }}</h3>
    <p>Your age: {{ user.age }}</p>
    <button (click)="showInfo()">Click me!</button>
    <div *ngIf="user.age < 13; else noPG13">Bạn có thể xem nội dung PG-13</div>
    <ng-template #noPG13>
      <div>Bạn không thể xem nội dung PG-13</div>
    </ng-template>

    <ng-template
      ngFor
      [ngForOf]="authors"
      let-author
      let-idx="index"
      let-total="count"
    >
      <div>
        ({{ idx }})/({{ total }}): {{ author.id }} - {{ author.firstName }}
        {{ author.lastName }} - {{ author.email }}
      </div>
    </ng-template>

    <div *ngFor="let item of authors">
      <div *ngIf="item.firstName === 'Flora'; else noFlora">Hello Flora</div>
      <ng-template #noFlora>
        <div>You are Priscella</div>
      </ng-template>
    </div>
  `,
})
export class TestComponent {
  title = 'demo';

  authors = [
    {
      id: 1,
      firstName: 'Flora',
      lastName: 'Twell',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
    },
    {
      id: 2,
      firstName: 'Priscella',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
    },
    // more data
  ];
  showInfo() {
    alert('Inside Angular Component method');
  }
}
