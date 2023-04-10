import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from 'src/_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
model: any= {};

//Vous allons correctement assiginé la valeur à notre observable utilisateur actuel
// currentUser$ :Observable<User | null> = of(null)


  constructor(public accountService : AccountService) {}
  ngOnInit(): void {
    // this.currentUser$ = this.accountService.currentUsers$;
  }

//   getCurrentUser()
//   {
//    this.accountService.currentUsers$.subscribe({
// next:user =>this.loggedIn == !!user,
// error: error =>console.log(error)

//    })

//   }

  login()
  {

    this.accountService.login(this.model).subscribe(
      {
        next: responce =>{console.log(responce);
          // this.loggedIn= true;
        },
        error:error =>console.log(error)
      }
    )
   
  }

  logout()
  {
    this.accountService.logout();//supprimer les elements de stockage
    // this.loggedIn = false;
  }

}
