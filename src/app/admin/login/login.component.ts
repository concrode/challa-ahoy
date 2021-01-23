import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  loginUser () {
    const loginUserData = {
      username:this.username,
      password:this.password
    }

    console.log(`${loginUserData.username} + ${loginUserData.password} `);

    if (loginUserData.username === 'demo' && loginUserData.password === 'demo') {
      console.log("equal")
      this.authService.setData(1);

      this.router.navigateByUrl('visitorData');
    }
  }

}
