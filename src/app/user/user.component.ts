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
  isLoggedIn=false;
}
