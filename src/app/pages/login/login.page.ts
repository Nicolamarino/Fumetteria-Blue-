import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/model/package/DTO/user-dto';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string;
  password:string;

  constructor(private loginService: LoginService) { }
autenticazione(){
  this.loginService.login(this.email, this.password).subscribe(resp=> {
    const user:UserDTO=resp;
    console.log(user);
  })
}
  ngOnInit() {
  }

}
