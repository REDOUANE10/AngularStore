import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';//nous avons un décorateur appeler Injectable
import { BehaviorSubject, map } from 'rxjs';
import { User } from 'src/_models/user';
//et les service angular peuvent être injectées dans nos composants ou dans nos services
@Injectable({
  providedIn: 'root'
})
//AccountService singletons instancier au démarrage de l'application et détruits à
export class AccountService {// it's the responsible to send request HTTP to our customer
baseUrl= 'https://localhost:5001/api/';//Inject the customer HTTP IN OUR CONSTUCTOR
private currentUserSource = new BehaviorSubject<User | null>(null);
//pour signifie que c'est obersvable
currentUsers$ = this.currentUserSource.asObservable();



  constructor(private http:HttpClient) { }

  login(model:any)
  {
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(

map((response:User)=> {
  const user = response;
  if(user)
  {

  localStorage.setItem('user', JSON.stringify(user))
//Mise en place de l'elemen dans le stockage local 
//Il ne faut pas utiliser la source de donnée actuelle 
  this.currentUserSource.next(user);
  }
})
    );
  }

  setCurrentUser(user:User)
  {
  this.currentUserSource.next(user);

  }

  logout()
  {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

}
