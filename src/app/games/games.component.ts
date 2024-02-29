import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
  <ul>
    <h3>Los juegos favoritos de {{username}}</h3>
    @for (game of games; track game.id) {
      <li>{{ game.name }}</li>
    }
  </ul>
  `,
  styleUrl: './games.component.css'
})
export class GamesComponent {
@Input() username="";

games = [
  {
    id:1,
    name: 'Super Mario Bros'
  },{
    id:2,
    name: 'Zelda'
  },{
    id:3,
    name: 'Donkey Kong'
  }
]
}
