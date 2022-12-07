import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'whats-in-your-city';
  exampleCard = {
    title: 'Viva Burger',
    subtitle: 'Restaurante',
    content: 'Viva Burger es un restaurante de comida rápida, donde sirven diversos platos de diferentes culturas aunadas en torno a su plato estrella: la hamburguesa personalizada.',
    image: {
      url: '../assets/img/viva.png',
      alt: 'Viva Burger',
      width: 380,
      height: 200
    },
    options: [{
      optionText: 'Ofertas',
      optionAction: 'toggleProgressBar()'
    }],
    showProgressBar: true,
    mainClass: 'navigation-card'
  }
}
