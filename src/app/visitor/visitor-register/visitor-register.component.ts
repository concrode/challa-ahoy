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
  email:string;
  showFirstNamePrompt:boolean;
  showLastNamePrompt:boolean;
  showPhoneNumberPrompt:boolean;
  showEmailPrompt:boolean;


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

  onChangeFirstName(firstName) {
    if (/^[a-zA-Z]+$/.test(firstName) ? true : false) {
      this.showFirstNamePrompt = false;
    } else {
      this.showFirstNamePrompt = true;
    }
  }

  onChangeLastName(lastName) {
    if (/^[a-zA-Z]+$/.test(lastName) ? true : false) {
      this.showLastNamePrompt = false;
    } else {
      this.showLastNamePrompt = true;
    }
  }

  onChangePhoneNumber(phoneNumber) {
    if (/^\d+$/.test(phoneNumber) ? true : false) {
      this.showPhoneNumberPrompt = false;
    } else {
      this.showPhoneNumberPrompt = true;
    }
  }

  onChangeEmail(email) {
    if ( /\b[a-z0-9-_.]+@[a-z0-9-_.]+(\.[a-z0-9]+)+/i.test(email) ? true : false) {
      this.showEmailPrompt = false;
    } else {
      this.showEmailPrompt = true;
    }
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


    if (this.firstName && this.lastName && this.phoneNumber && this.email && !this.showFirstNamePrompt
      && !this.showLastNamePrompt && !this.showPhoneNumberPrompt && !this.showEmailPrompt) {
      this.visitorService.setVisitor(visitor);
      this.router.navigateByUrl('confirm');
    }
  }

}
