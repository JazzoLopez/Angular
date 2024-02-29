import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',//identificar el selector
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username="JazzoLopez";
  isLoggedIn=false;  //<-Esto esta funcionando como un estado
  // TODA LA LOGICA VA AQUI
  greet(){
    alert("Hello "+this.username);
  }
}
