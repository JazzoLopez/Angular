import { Component } from '@angular/core';

@Component({
  selector: 'app-user',//identificar el selector
  standalone: true,
  imports: [],
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
