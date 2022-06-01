import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserDTO } from 'src/app/model/package/DTO/user-dto';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @Input('formControlName') email:string;
  @Input('formControlName') password:string;
  loginForm;

  constructor(private loginService: LoginService, private fb:FormBuilder) {
    this.loginForm=this.fb.group({
      email:['', [Validators.email, Validators.required]],
      password:['', [Validators.required, Validators.pattern, Validators.minLength(4)]]
    })
   }
autenticazione(){
  this.loginService.login(this.email, this.password).subscribe(resp=> {
    const user:UserDTO=resp;
    console.log(user);
  })
}
  ngOnInit() {
  }

}
