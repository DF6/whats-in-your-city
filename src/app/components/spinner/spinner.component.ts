import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  public active = false;

  show() {
    this.active = true;
  }

  hide() {
    this.active = false;
  }

}
