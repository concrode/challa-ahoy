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
    const user = {
      username:this.username,
      password:this.password
    }

    console.log(`${user.username} + ${user.password} `);

    this.authService.login(user).subscribe(
      response => {
        console.log("Login Success:" + response);
        localStorage.setItem('token', response.token);
        this.router.navigateByUrl('visitorData');
      },
      err => {
        console.log("Login Error:" + err);
      }
    )
  }

}
