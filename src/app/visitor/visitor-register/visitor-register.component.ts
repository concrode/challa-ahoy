import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { VisitorService } from '../../shared/visitor.service';

@Component({
  selector: 'app-visitor-register',
  templateUrl: './visitor-register.component.html',
  styleUrls: ['./visitor-register.component.css']
})
export class VisitorRegisterComponent implements OnInit {
  checkinTime:Date = new Date();
  firstName:string;
  lastName:string;
  phoneNumber:string;
  email:string

  constructor(private router: Router, 
              private visitorService: VisitorService,
              private authService: AuthService) { 
    setInterval(() => {
      this.checkinTime = new Date();
    }, 1);
  }

  ngOnInit(): void {
    this.authService.clearToken();
  }

  onSubmit() {
    const visitor = {
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber:this.phoneNumber,
        email:this.email,
        checkinTime:this.checkinTime
    }

    console.log(`${visitor.firstName}, ${visitor.lastName}, ${visitor.phoneNumber}, ${visitor.email},
     ${visitor.checkinTime}`);

    this.visitorService.setVisitor(visitor);
    this.router.navigateByUrl('confirm');
  }

}
