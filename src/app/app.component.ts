import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from 'src/_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  title  = 'Datting App';
  constructor(private accountService : AccountService){}
  ngOnInit(): void {
    this.setCurrentUser()
  }


  //cette méthode pour définir l'utilisateur actuelle

  setCurrentUser() 
  {
    const userString =localStorage.getItem('user');
    if(!userString) return;
    const user:User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }

}
