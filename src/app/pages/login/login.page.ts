import { Component, NgZone, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserDTO } from 'src/app/model/package/DTO/user-dto';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  show: boolean = false;
  passwordType: string = "password";
  email: string;
  password: string;
  loginForm;
  constructor(private fb: FormBuilder, private loginService: LoginService, private zone: NgZone) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.pattern, Validators.minLength(4)]]
    })
  }
  mostraPsw() {
    if (this.show) {
      this.show = false;
      this.passwordType = "password";
    } else {
      this.show = true;
      this.passwordType = "text";
    }
  }
  autenticazione() {
    this.loginService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value).subscribe(

      resp => {
        const user: UserDTO = resp;
        const id = user.id;
        //thx to fratellino Kebabi
        this.zone.runOutsideAngular(() => {
          window.location.href = '/home?id='+ id;
        });
      },
      error => {
        this.password = "";
        alert("Email o Password errata");
      })
  }
  ngOnInit() {
  }
}