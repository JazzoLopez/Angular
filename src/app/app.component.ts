import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { GamesComponent } from './games/games.component';

@Component({//decorador
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, UserComponent, GamesComponent], //todos los modulos que utilizaremos, se refiere al nombre asi que tengamos cuidadp
  templateUrl: './app.component.html',
  /* template:"<h1>hola mundo</h1>
  <app-user></app-user>" //se puede utilizar template o templateUrl*/
  styleUrl: './app.component.css'
})
export class AppComponent {
  city = 'Mexico';
}
 