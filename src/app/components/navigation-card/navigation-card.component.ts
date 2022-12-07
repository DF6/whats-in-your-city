import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'wiyc-navigation-card',
  templateUrl: './navigation-card.component.html',
  styleUrls: ['./navigation-card.component.scss'],
  imports: [
    NgOptimizedImage,
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule
  ],
  standalone: true
})
export class NavigationCardComponent implements OnInit {

  @Input() card: Card = {};
  public showProgressBar: Boolean = false;

  constructor() {}

  ngOnInit() {
    if (this.card.showProgressBar) {
      this.toggleProgressBar();
    }
  }

  public toggleProgressBar() {
    if (this.card.showProgressBar) {
      this.showProgressBar = !this.showProgressBar;
      this.showProgressBar ? this.card.mainClass = 'navigation-card' : this.card.mainClass = 'navigation-card no-progress-bar'
    }
  }

}
