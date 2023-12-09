import { VERSION } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular' + VERSION.major;
  isChecked = true;
  user = {
    name: 'Tiep Phan',
    age: 30,
  };

  hander() {
    console.log('OnClick oke oke');
  }
}
