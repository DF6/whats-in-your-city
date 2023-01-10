import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  public categories: any[] = [];
  public items: Card[] = [];

  constructor(private businessService: BusinessService) {}

  ngOnInit() {
    this.categories = [];
    this.items = [];
    this.businessService.getAllBusiness().subscribe((data) => {
      this.cardMapper(data);
    });
  }

  /*isPremium(card: Card) {
    return card.premium;
  }

  isLOPD(card: Card) {
    return card.lopd;
  }*/

  private cardMapper(data: any) {
    data.forEach((business: any) => {
      if (!this.categories.find( c => c.name === business.businessType)) {
        this.categories.push({ name: business.businessType, items: []});
      }
      this.items.push({
        title: business.name,
        subtitle: business.businessType,
        content: business.description,
        image: {
          url: '../assets/img/viva.png',
          alt: business.name,
          width: window.innerWidth/2.3,
          height: window.innerHeight/6
        },
        options: [{
          optionText: 'Ofertas',
          optionAction: 'this.toggleProgressBar()'
        }],
        showProgressBar: true,
        mainClass: 'navigation-card'
      });
    });

    this.categories.forEach((category) => {
      this.items.forEach((item) => {
        if (item.subtitle === category.name) {
          category.items.push(item);
        }
      });
    });
  }

}
