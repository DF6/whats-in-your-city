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
      this.items.push({
        title: business.name,
        subtitle: business.businessType,
        content: business.description,
        image: {
          url: '../assets/img/viva.png',
          alt: business.name,
          width: 380,
          height: 200
        },
        options: [{
          optionText: 'Ofertas',
          optionAction: 'this.toggleProgressBar()'
        }],
        showProgressBar: true,
        mainClass: 'navigation-card'
      });
    });
  }

}
