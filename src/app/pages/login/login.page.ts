
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  loginForm;

  constructor(private fb:FormBuilder, private loginService: LoginService, private zone:NgZone) {
    this.loginForm=this.fb.group({
      email:['', [Validators.email, Validators.required]],
      password:['', [Validators.required, Validators.pattern, Validators.minLength(4)]]
    })
   }
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
