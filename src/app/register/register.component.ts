import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{
 @Input() usersFromHomeComponent:any;
 @Output() cancelRegister = new EventEmitter();
  model:any={}

  constructor(){}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  register()
  {
    console.log(this.model);
  }

  cancel()
  {
    this.cancelRegister.emit(false);

  }


}
