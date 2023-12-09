import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'toggle',
  template: `
    <div
      class="toggle-wrapper"
      [class.checked]="checked"
      tabindex="0"
      (click)="checkedChange.emit(!checked)"
    >
      <div class="toggle"></div>
    </div>
  `,
  styles: [
    `
      .toggle-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: rgba(254, 69, 81, 1); /* Updated color */
        box-shadow: 0 20px 20px 0 rgba(254, 69, 81, 0.3); /* Updated color */
      }

      .toggle-wrapper:active {
        width: 95px;
        height: 95px;
        box-shadow: 0 15px 15px 0 rgba(254, 69, 81, 0.5); /* Updated color */
      }
      .toggle-wrapper .toggle {
        height: 17px;
        width: 17px;
      }

      .toggle {
        transition: all 0.2s ease-in-out;
        height: 20px;
        width: 20px;
        background-color: transparent;
        border: 10px solid #fff;
        border-radius: 50%;
        cursor: pointer;
        animation: red 0.7s linear forwards;
      }

      .toggle-wrapper.checked {
        background-color: rgba(72, 233, 138, 1); /* Updated color */
        box-shadow: 0 20px 20px 0 rgba(72, 233, 138, 0.3); /* Updated color */
      }

      .toggle-wrapper.checked:active {
        box-shadow: 0 15px 15px 0 rgba(72, 233, 138, 0.5); /* Updated color */
      }

      .toggle-wrapper.checked .toggle {
        width: 0;
        background-color: #fff;
        border-color: transparent;
        border-radius: 30px;
        animation: green 0.7s linear forwards !important;
      }
    `,
  ],
})
export class ToggleComponent {
  @Input() checked: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>(); // camelCase for event name
}
