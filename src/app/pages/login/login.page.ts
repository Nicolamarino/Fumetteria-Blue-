import { Component, NgZone, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/model/package/DTO/user-dto';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;


  constructor(private loginService: LoginService, private zone:NgZone) { }
  autenticazione() {
    this.loginService.login(this.email, this.password).subscribe(
      resp => {
        const user: UserDTO = resp;
        //thx to fratellino Kebabi
        this.zone.runOutsideAngular(() => {
          window.location.href = '/home';
        });
      },
      error => {
        this.password="";
        alert("Email o Password errata");
      })
  }
  ngOnInit() {
  }


}
