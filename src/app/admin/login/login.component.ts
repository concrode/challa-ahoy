import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor() { }

  ngOnInit(): void {
  }

  loginUser () {
    const loginUserData = {
      username:this.username,
      password:this.password
    }

    console.log(`${loginUserData.username} + ${loginUserData.password} `);
  }

}
