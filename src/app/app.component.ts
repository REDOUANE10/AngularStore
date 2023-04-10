import { HttpClient } from '@angular/common/http';
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
  users :any;


  constructor(private http:HttpClient, private accountService : AccountService){}
  ngOnInit(): void {
    this.getUser();
    this.setCurrentUser()
  }

  getUser()
  {
    this.http.get('https://localhost:5001/api/Users').subscribe({
    next: response=>this.users = response,
    error:error=>console.log(error),
    complete: ()=>console.log('Request is completed')})
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
