import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {

  constructor() { }
@Input() nome:string;
@Input() cognome:string;
@Input() email:string;



  ngOnInit() {}

}